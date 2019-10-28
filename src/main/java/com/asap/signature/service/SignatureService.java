package com.asap.signature.service;

import java.io.IOException;

/**
 * Created by jason on 19-10-21.
 */
public interface SignatureService {
    String signature(String fileName);

    boolean pdfSignatureVerify(String fileName);

    boolean pdfUpdateName(String name);

    String pdfCreate();

}
