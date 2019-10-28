package com.asap.signature.utils;

import com.itextpdf.text.*;
import com.itextpdf.text.pdf.*;
import com.itextpdf.text.pdf.parser.PdfTextExtractor;
import com.itextpdf.text.pdf.security.*;
import com.itextpdf.tool.xml.XMLWorkerHelper;
import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.StringUtils;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.io.*;
import java.net.URL;
import java.nio.charset.Charset;
import java.security.GeneralSecurityException;
import java.security.KeyStore;
import java.security.PrivateKey;
import java.security.cert.Certificate;
import java.util.HashMap;
import java.util.Map;

/**
 * @ClassName: ItextPDFUtil
 * @Description: itext导出pdf通用类
 * @create: 2019-01-22 11:14
 * @Verison:1,0
 */
public class ItextPDFUtil {
    private static Logger logger = LoggerFactory.getLogger(ItextPDFUtil.class);

    private static String CHINA_TEX_INTER = "CHINA_TEX_INTER";  //中纺棉国际
    private static String ME_SPIN_COTTON = "ME_SPIN_COTTON";   //中纺棉花

    /**
     * 生成pdf
     *
     * @param root
     * @param pdfName
     * @param pngName
     * @param docurx
     * @param docury
     * @return
     * @throws TemplateException
     * @throws IOException
     * @throws Exception
     */
    public static ByteArrayOutputStream processPdf(Map root, String pdfName, String pngName
            , Float docurx, Float docury) throws TemplateException, IOException, Exception {
//        String basePath = request.getSession().getServletContext().getRealPath("/");
        String basePath = "/home/jason/project/signature/src/main/resources/templates";
        Configuration cfg = new Configuration(Configuration.VERSION_2_3_0);
        //设置加载模板的目录
        String ftlUrl = basePath + "/ftl";
        logger.info("pdf模板路径:" + ftlUrl);
        cfg.setDirectoryForTemplateLoading(new File(ftlUrl));
        // 设置编码
        cfg.setDefaultEncoding("UTF-8");
        logger.info("从指定的模板目录中加载对应的模板文件");
        // 从指定的模板目录中加载对应的模板文件
        Template temp = cfg.getTemplate("" + pdfName + ".ftl");
        root.put("basePath", basePath);
        String fileName = basePath + "/" + pdfName + System.currentTimeMillis() + ".html";
        logger.info("生成HTML文件名：" + fileName);
        File file = new File(fileName);
        if (!file.exists()) {
            file.createNewFile();
        }
        Writer out = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(file), "UTF-8"));
        temp.process(root, out);
        String outputFileName = basePath + "/" + System.currentTimeMillis() + ".pdf";
        String outputSignFileName = basePath + "/" + System.currentTimeMillis() + "sign.pdf";
        logger.info("生成PDF文件名：" + outputFileName);
        Document document = null;
        if (docurx == null || docury == null) {
            //默认设置
            document = new Document(PageSize.A4); // 横向打印
        } else {
            document = new Document(new RectangleReadOnly(docurx, docury));
        }




        PdfWriter writer = PdfWriter.getInstance(document, new FileOutputStream(outputFileName));
        document.open();
        document.addCreator("科创安铨");
        document.addCreationDate();
        document.addSubject("jason");


        // FontProvider参数是为了解决中文问题，如果不加此参数则pdf文件中，中文为空白。
        XMLWorkerHelper.getInstance().parseXHtml(writer, document, new FileInputStream(fileName), Charset.defaultCharset(), new FontProvider() {
            @Override
            public boolean isRegistered(String s) {
                return false;
            }

            @Override
            public Font getFont(String s, String s1, boolean b, float v, int i, BaseColor baseColor) {
                BaseFont baseFont = null;
                try {
                    baseFont = BaseFont.createFont("/home/jason/Desktop/signature/SIMYOUTTF_downcc/SIMYOU.TTF", BaseFont.IDENTITY_H, BaseFont.NOT_EMBEDDED);
                } catch (DocumentException e) {
                    e.printStackTrace();
                } catch (IOException e) {
                    e.printStackTrace();
                }
                Font font = new Font(baseFont);
                return font;
            }
        });


//        HashMap<PdfName, PdfObject> accessibleAttributes = document.getAccessibleAttributes();
//        for (Map.Entry<PdfName, PdfObject> pdfNamePdfObjectEntry : accessibleAttributes.entrySet()) {
//            System.out.println(pdfNamePdfObjectEntry.getKey() + " : " + pdfNamePdfObjectEntry.getValue());
//        }

//        XMLWorkerHelper.getInstance().parseXHtml(writer, document, new FileInputStream(fileName), Charset.forName("UTF-8"));
        document.close();
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        String DEST = outputFileName;
        if (!StringUtils.isEmpty(pngName)) {
            /*=============================电子签章 Start===========================================*/
            String KEYSTORE = "/home/jason/Desktop/signature/keystore.p12";
            char[] PASSWORD = "123456".toCharArray();//keystory密码,密码不可改变，生成证书的时候指定
            String SRC = outputFileName;//原始pdf
//            String SRC = "/home/jason/Desktop/Title.pdf";
            DEST = outputSignFileName;//签名完成的pdf
            String chapterPath = "/home/jason/Desktop/signature/张雪龙.png";//签章图片
            String reason = "理由";
            String location = "位置";
            sign(new FileInputStream(SRC), new FileOutputStream(DEST),
                    new FileInputStream(KEYSTORE), PASSWORD,
                    reason, location, chapterPath);
            /*=============================电子签章 Start==========================================*/
        }
        InputStream is = new FileInputStream(DEST);
        int buf;
        while ((buf = is.read()) != -1) {
            baos.write(buf);
        }
        baos.flush();
        is.close();
        out.close();
        writer.close();


        URL url = new URL("file:///home/jason/Desktop/signature/1571119294756.pdf");

        String pageContent = "";
        PdfReader pdfReader = new PdfReader(url);
        int pageNum = pdfReader.getNumberOfPages();
        for (int i = 1; i <= pageNum; i++) {
            pageContent += PdfTextExtractor.getTextFromPage(pdfReader, i);//读取第i页的文档内容
        }

        System.out.println(pageContent);


        SM4Utils sm4Utils = new SM4Utils();


        String cipherText = sm4Utils.encryptData_ECB(pageContent);
        System.out.println("密文: " + cipherText);


//        file = new File(fileName);
//        file.delete();
//        file = new File(outputFileName);
//        file.delete();
//        file = new File(DEST);
//        file.delete();
        return baos;
    }


    /**
     * 在已经生成的pdf上添加电子签章，生成新的pdf并将其输出出来
     *
     * @param src
     * @param dest
     * @param p12Stream
     * @param password
     * @param reason
     * @param location
     * @param chapterPath
     * @throws GeneralSecurityException
     * @throws IOException
     * @throws DocumentException
     */
    public static void sign(InputStream src  //需要签章的pdf文件路径
            , OutputStream dest  // 签完章的pdf文件路径
            , InputStream p12Stream, //p12 路径
                            char[] password
            , String reason  //签名的原因，显示在pdf签名属性中，随便填
            , String location, String chapterPath) //签名的地点，显示在pdf签名属性中，随便填
            throws GeneralSecurityException, IOException, DocumentException {
        //读取keystore ，获得私钥和证书链
        KeyStore ks = KeyStore.getInstance("PKCS12");
        ks.load(p12Stream, password);
        String alias = (String) ks.aliases().nextElement();
        PrivateKey pk = (PrivateKey) ks.getKey(alias, password);
        Certificate[] chain = ks.getCertificateChain(alias);

        //下边的步骤都是固定的，照着写就行了，没啥要解释的
        // Creating the reader and the stamper，开始pdfreader
        PdfReader reader = new PdfReader(src);
        //目标文件输出流
        //创建签章工具PdfStamper ，最后一个boolean参数
        //false的话，pdf文件只允许被签名一次，多次签名，最后一次有效
        //true的话，pdf可以被追加签名，验签工具可以识别出每次签名之后文档是否被修改
        PdfStamper stamper = PdfStamper.createSignature(reader, dest, '\0', null, false);
        // 获取数字签章属性对象，设定数字签章的属性
        PdfSignatureAppearance appearance = stamper.getSignatureAppearance();
        appearance.setSignatureCreator("zhangxuelong");//未找到改变值
        appearance.setReason(reason);
        appearance.setLocation(location);
        //设置签名的位置，页码，签名域名称，多次追加签名的时候，签名预名称不能一样
        //签名的位置，是图章相对于pdf页面的位置坐标，原点为pdf页面左下角
        //四个参数的分别是，图章左下角x，图章左下角y，图章右上角x，图章右上角y
        appearance.setVisibleSignature(new Rectangle(300, 600, 630, 500), 1, "sig1");
        //读取图章图片，这个image是itext包的image
        Image image = Image.getInstance(chapterPath);
        appearance.setSignatureGraphic(image);
        appearance.setCertificationLevel(PdfSignatureAppearance.CERTIFIED_NO_CHANGES_ALLOWED);
        //设置图章的显示方式，如下选择的是只显示图章（还有其他的模式，可以图章和签名描述一同显示）
        appearance.setRenderingMode(PdfSignatureAppearance.RenderingMode.GRAPHIC);

        // 这里的itext提供了2个用于签名的接口，可以自己实现，后边着重说这个实现
        // 摘要算法
        ExternalDigest digest = new BouncyCastleDigest();
        // 签名算法
        ExternalSignature signature = new PrivateKeySignature(pk, DigestAlgorithms.SHA256, null);


        // 调用itext签名方法完成pdf签章CryptoStandard.CMS 签名方式，建议采用这种
        MakeSignature.signDetached(appearance, digest, signature, chain, null, null, null, 0, MakeSignature.CryptoStandard.CMS);
    }

    public static void main(String[] args) throws Exception {
        ItextPDFUtil.processPdf(new ModelAndView().getModelMap(), "test", "张雪龙", 595.0F, 842.0F);//调用了PDF打印工具类
    }
}