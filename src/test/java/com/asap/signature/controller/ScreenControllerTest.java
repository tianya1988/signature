package com.asap.signature.controller;

import com.asap.signature.Application;
import junit.framework.TestCase;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = {Application.class}, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ScreenControllerTest extends TestCase {

    private MockMvc mockMvc;

    @Autowired
    protected WebApplicationContext context;

    @Before
    public void setMockMvc() {
        this.mockMvc = MockMvcBuilders.webAppContextSetup(context).build();
    }

   /* @Test
    public void testGetTop() throws Exception {
        mockMvc.perform(get("/top/7/10/scan")).andDo(print()).andExpect(status().isOk());
    }

    @Test
    public void testGetAttackCount() throws Exception {
        mockMvc.perform(get("/attack/count/7/scan")).andDo(print()).andExpect(status().isOk());
    }

    @Test
    public void getAttackUnitCount() throws Exception {
        mockMvc.perform(get("/attack/unit/count")).andDo(print()).andExpect(status().isOk());
    }

    @Test
    public void getAttackServerCount() throws Exception {
        mockMvc.perform(get("/attack/server/count/7")).andDo(print()).andExpect(status().isOk());
    }



    @Test
    public void getDataSourceTypeCount() throws Exception {
        mockMvc.perform(get("/data-source/type/count")).andDo(print()).andExpect(status().isOk());
    }
*/


    @Test
    public void getThreatTotal() throws Exception {
        mockMvc.perform(get("/threat/total/7")).andDo(print()).andExpect(status().isOk());
    }

    @Test
    public void getMonitorSystemCount() throws Exception {
        mockMvc.perform(get("/monitor/system/count")).andDo(print()).andExpect(status().isOk());
    }


    @Test
    public void getRecentlyAttackSystemCount() throws Exception {
        mockMvc.perform(get("/attack/system/count/1")).andDo(print()).andExpect(status().isOk());
    }

    @Test
    public void getRecentlyAttackHandleCount() throws Exception {
        mockMvc.perform(get("/attack/handle/count/7")).andDo(print()).andExpect(status().isOk());
    }

    @Test
    public void getTotalStorage() throws Exception {
        mockMvc.perform(get("/data-flow-monitor/total-storage")).andDo(print()).andExpect(status().isOk());
    }

    @Test
    public void getYesterdayLogsCount() throws Exception {
        mockMvc.perform(get("/data-flow-monitor/logs-count")).andDo(print()).andExpect(status().isOk());
    }

    @Test
    public void getLogsTotalRate() throws Exception {
        mockMvc.perform(get("/data-flow-monitor/logs-total-rate")).andDo(print()).andExpect(status().isOk());
    }

    @Test
    public void getDataSourcePointCount() throws Exception {
        mockMvc.perform(get("/data-source/point/count")).andDo(print()).andExpect(status().isOk());
    }

    @Test
    public void getRecentlyAttackTopN() throws Exception {
        mockMvc.perform(get("/recently/attack/top/10")).andDo(print()).andExpect(status().isOk());
    }

    @Test
    public void getTrend() throws Exception {
        mockMvc.perform(get("/trend/7")).andDo(print()).andExpect(status().isOk());
    }


}
