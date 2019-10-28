package com.asap.signature.es;

import com.alibaba.fastjson.JSONObject;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.common.settings.Settings;
import org.elasticsearch.common.transport.InetSocketTransportAddress;
import org.elasticsearch.index.query.BoolQueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.SearchHit;
import org.elasticsearch.search.SearchHits;
import org.elasticsearch.search.aggregations.AggregationBuilders;
import org.elasticsearch.search.aggregations.bucket.terms.Terms;
import org.elasticsearch.transport.client.PreBuiltTransportClient;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * Created by jason on 19-9-2.
 */
public class EsTest {

    public static void main(String[] args) throws UnknownHostException {

        Settings settings = Settings.builder()
                .put("cluster.name", "tisec_bigdata")
                .put("client.transport.sniff", true)
                .build();
        TransportClient client = new PreBuiltTransportClient(settings)
                .addTransportAddress(new InetSocketTransportAddress(InetAddress.getByName("tisec-p-es01"), 9300))
                .addTransportAddress(new InetSocketTransportAddress(InetAddress.getByName("tisec-p-es02"), 9300));

        //getAggs(client);
        //getIndexCount(client);

        /**
         * {
         "query": {
         "match": {
         "alarm_metricInfo.h_dstip_geoInfo.country": {
         "query": "中国",
         "type": "phrase"
         }
         }
         }
         }
         */

        SimpleDateFormat df = new SimpleDateFormat("yyyyMMdd");
        String dateStr = df.format(new Date());
        System.out.println(dateStr);

//        BoolQueryBuilder queryBuilder = QueryBuilders.boolQuery()
//                .mustNot(QueryBuilders.matchQuery("alarm_metricInfo.h_dstip_geoInfo.country", "中国"))
//                .mustNot(QueryBuilders.matchQuery("alarm_metricInfo.h_dstip_geoInfo.country", "局域网"))


        BoolQueryBuilder queryBuilder = QueryBuilders.boolQuery()
                .mustNot(QueryBuilders.matchQuery("alarm_metricInfo.h_srcip_geoInfo.country", "中国"))
                .mustNot(QueryBuilders.matchQuery("alarm_metricInfo.h_srcip_geoInfo.country", "局域网"));


        SearchResponse searchResponse = client.prepareSearch("bjg-scsc-alarm-20190902").setQuery(queryBuilder).setSize(100).get();
        SearchHits hits = searchResponse.getHits();
        SearchHit[] hitsArray = hits.getHits();

        System.out.println(hitsArray.length);

        for (SearchHit searchHitFields : hitsArray) {
            Map<String, Object> sourceAsMap = searchHitFields.getSourceAsMap();
            JSONObject jsonObject = new JSONObject(sourceAsMap);
            System.out.println(jsonObject.toJSONString());
            String country = jsonObject.getJSONObject("alarm_metricInfo").getJSONObject("h_srcip_geoInfo").getString("country");

            System.out.println(country);
        }
        client.close();
    }

    private static void getIndexCount(TransportClient client) {
        SearchResponse searchResponse = client.prepareSearch("bjg-scsc-alarm-20190902").setSize(0).get();
        long totalHits = searchResponse.getHits().getTotalHits();
        System.out.println(totalHits);
    }

    private static void getAggs(TransportClient client) {
        //{"from":0,"size":0,"aggregations":{"h_dstip":{"terms":{"field":"h_dstip","size":1000000}}}}
        SearchResponse sr = client.prepareSearch("*scsc-alarm-20190926")
                .setQuery(QueryBuilders.matchAllQuery())
                .addAggregation(AggregationBuilders.terms("aggDstIp").field("h_dstip").size(100000))
                .addAggregation(AggregationBuilders.terms("aggSrcIp").field("h_srcip").size(100000))
                .get();

        Terms aggDstIp = sr.getAggregations().get("aggDstIp");
        List<? extends Terms.Bucket> buckets = aggDstIp.getBuckets();

        System.out.println(buckets.size() + "");
        for (Terms.Bucket bucket : buckets) {
            System.out.println(bucket.getKeyAsString() + " : " + bucket.getDocCount());

        }

        System.out.println("====================");
        Terms aggSrcIp = sr.getAggregations().get("aggSrcIp");
        List<? extends Terms.Bucket> srcBuckets = aggSrcIp.getBuckets();

        System.out.println(srcBuckets.size() + "");
        for (Terms.Bucket bucket : srcBuckets) {
            System.out.println(bucket.getKeyAsString() + " : " + bucket.getDocCount());

        }
    }

}
