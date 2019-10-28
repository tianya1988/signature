package com.asap.signature.utils;

/**
 * Created by jason on 19-3-25.
 */
public class PageUtil {
    public static int validPageSize(int pageSize) {
        if (pageSize < 0) {
            return 10;
        }
        return pageSize;
    }

    public static int validPageNum(int pageNum) {
        if (pageNum < 1) {
            return 1;
        }
        return pageNum;
    }
}
