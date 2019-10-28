package com.asap.signature;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.scheduling.annotation.EnableScheduling;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

//@Configuration 不用
//@EnableAutoConfiguration 不用
@SpringBootApplication
@EnableScheduling //启动定时任务
@EnableSwagger2
@EnableAutoConfiguration(exclude={DataSourceAutoConfiguration.class})//当不需要启动数据库时 添加此配置
public class Application {
    public static void main(String args[]) {
        SpringApplication.run(Application.class);
    }
}
