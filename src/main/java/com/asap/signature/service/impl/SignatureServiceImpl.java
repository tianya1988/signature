package com.asap.signature.service.impl;

import com.asap.signature.service.SignatureService;
import com.asap.signature.utils.ItextPDFUtil;
import com.asap.signature.utils.SM4Utils;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Font;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.BaseFont;
import com.itextpdf.text.pdf.PdfReader;
import com.itextpdf.text.pdf.PdfStamper;
import com.itextpdf.text.pdf.PdfWriter;
import com.itextpdf.text.pdf.parser.PdfTextExtractor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.security.GeneralSecurityException;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by jason on 19-10-21.
 */
@Service
public class SignatureServiceImpl implements SignatureService {

    @Value("${pdf.base.path}")
    private String basePath = "";

    @Override
    public String pdfCreate() {

        String pdfPath = basePath + System.currentTimeMillis() + ".pdf";
        // 1.新建document对象
        Document document = new Document();

        // 2.建立一个书写器(Writer)与document对象关联，通过书写器(Writer)可以将文档写入到磁盘中。
        // 创建 PdfWriter 对象 第一个参数是对文档对象的引用，第二个参数是文件的实际名称，在该名称中还会给出其输出路径。
        PdfWriter writer = null;
        try {

            writer = PdfWriter.getInstance(document, new FileOutputStream(pdfPath));
        } catch (DocumentException e) {
            e.printStackTrace();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }

        // 3.打开文档
        document.open();

        BaseFont baseFont = null;
        try {
            baseFont = BaseFont.createFont(basePath + "SIMYOUTTF_downcc/SIMYOU.TTF", BaseFont.IDENTITY_H, BaseFont.NOT_EMBEDDED);
        } catch (DocumentException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        Font font = new Font(baseFont);

        // 4.添加一个内容段落
        try {
            document.add(new Paragraph("    中国信息安全测评中心", font));
            document.add(new Paragraph("注册信息安全专业人员cisp", font));
            document.add(new Paragraph("注册信息安全工程师", font));
            document.add(new Paragraph("证书编号: 1234657687934", font));
            document.add(new Paragraph("兹证明", font));
            document.add(new Paragraph("张雪龙", font));
            document.add(new Paragraph("经中国信息安全测评中心的考试和审定，符合《注册信息安全专业人员资质评估准则》的要求，获准注册信息安全工程师（CISE）资质", font));
            document.add(new Paragraph("批准人： 马忠华", font));
            document.add(new Paragraph("发证日期： 2019年10月18日", font));
            document.add(new Paragraph("有效期： 2019年10月18日 至 2022年10月18日 ", font));
        } catch (DocumentException e) {
            e.printStackTrace();
        }

        // 5.关闭文档
        document.close();
        writer.close();
        return pdfPath;
    }

    @Override
    public String signature(String fileName) {

        String filePath = basePath + fileName;

        String KEYSTORE = basePath + "keystore.p12";
        char[] PASSWORD = "123456".toCharArray();//keystory密码,密码不可改变，生成证书的时候指定

        String dest = basePath + System.currentTimeMillis() + "sign.pdf";

        String chapterPath = basePath + "张雪龙.png";//签章图片
        String reason = "理由";
        String location = "位置";
        try {
            FileInputStream fileInputStream = new FileInputStream(filePath);
            FileOutputStream fileOutputStream = new FileOutputStream(dest);

            ItextPDFUtil.sign(fileInputStream, fileOutputStream,
                    new FileInputStream(KEYSTORE), PASSWORD,
                    reason, location, chapterPath);
            fileInputStream.close();
            fileOutputStream.close();
        } catch (GeneralSecurityException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (DocumentException e) {
            e.printStackTrace();
        }

        String pageContent = getPdfContent(filePath);

        System.out.println(pageContent);


        String code = SM4Utils.encryptData_CBC(pageContent);
        System.out.println(code);

        System.out.println(SM4Utils.decryptData_CBC(code));


        String dest2 = basePath + System.currentTimeMillis() + "sign-sm4.pdf";
        try {
            PdfReader reader = new PdfReader(dest);
            PdfStamper stamper = new PdfStamper(reader, new FileOutputStream(dest2));
            Map<String, String> info = reader.getInfo();
            info.put("Title", "我的证书");
            info.put("Subject", "科创安铨");
            info.put("Keywords", code);
            info.put("Creator", "jason");
            info.put("Author", "张雪龙");
            stamper.setMoreInfo(info);
            stamper.close();
            reader.close();
        } catch (DocumentException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return dest2;
    }

    private String getPdfContent(String filePath) {
        URL url = null;
        try {
            url = new URL("file://" + filePath);
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }

        String pageContent = "";
        try {
            PdfReader pdfReader = new PdfReader(url);
            int pageNum = pdfReader.getNumberOfPages();
            for (int i = 1; i <= pageNum; i++) {
                pageContent += PdfTextExtractor.getTextFromPage(pdfReader, i);//读取第i页的文档内容
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return pageContent;
    }

    @Override
    public boolean pdfSignatureVerify(String fileName) {
        String filePath = basePath + fileName;

        String pdfContent = getPdfContent(filePath);

        String keywords = "";
        try {
            PdfReader reader = new PdfReader(filePath);
            HashMap<String, String> info = reader.getInfo();
            keywords = info.get("Keywords");
            System.out.println(keywords);
        } catch (IOException e) {
            e.printStackTrace();
        }
        String decryData = SM4Utils.decryptData_CBC(keywords);


        if (pdfContent.equals(decryData)) {
            return true;
        }
        System.out.println("校验内容 : ");
        System.out.println(pdfContent);
        System.out.println("=================");
        System.out.println("原文内容 : ");
        System.out.println(decryData);

        return false;
    }

    @Override
    public boolean pdfUpdateName(String name) {

        return false;
    }

    public static void main(String[] args) {
        SignatureServiceImpl signatureService = new SignatureServiceImpl();
        // signatureService.signature("/home/jason/Desktop/signature/1571119294756.pdf");
//        signatureService.pdfSignatureVerify("/home/jason/Desktop/signature/1571714219576sign-sm4.pdf");

        String s = signatureService.pdfCreate();
        System.out.println(s);
    }
}
