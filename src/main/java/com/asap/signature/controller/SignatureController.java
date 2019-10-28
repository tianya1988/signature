package com.asap.signature.controller;

import com.asap.signature.builder.ResultBuilder;
import com.asap.signature.service.SignatureService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/**
 * Created by developer on 17-10-17.
 */
@RestController
public class SignatureController {

    @Autowired
    private SignatureService signatureService;

    @ApiOperation("pdf生成")
    @GetMapping("/pdf/create")
    public Map pdfCreate() {
        String pdfPath = signatureService.pdfCreate();
        return ResultBuilder.buildSuccess(pdfPath);
    }


    @ApiOperation("pdf签名")
    @GetMapping("/pdf/signature/{fileName}")
    public Map pdfSignature(@PathVariable String fileName) {
        String signaturePdfPath = signatureService.signature(fileName);
        return ResultBuilder.buildSuccess(signaturePdfPath);
    }

    @ApiOperation("pdf验签")
    @GetMapping("/pdf/signature/verify/{fileName}")
    public Map pdfSignatureVerify(@PathVariable String fileName) {
        boolean verifyFlag = signatureService.pdfSignatureVerify(fileName);
        return ResultBuilder.buildSuccess(verifyFlag);
    }


    @ApiOperation("pdf更新名字")
    @GetMapping("/pdf/update/name/{name}")
    public Map pdfUpdateName(@PathVariable String name) {
        boolean verifyFlag = signatureService.pdfUpdateName(name);
        return ResultBuilder.buildSuccess(verifyFlag);
    }

}
