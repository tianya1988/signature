CREATE DATABASE IF NOT EXISTS scsc_screen
  DEFAULT CHARACTER SET utf8
  COLLATE utf8_general_ci;

SET sql_safe_updates = 0;


CREATE TABLE `screen_static_config` (
  `id`          INT(11)      NOT NULL AUTO_INCREMENT,
  `item_key`    VARCHAR(255) NOT NULL UNIQUE KEY,
  `item_value`  VARCHAR(255)          DEFAULT NULL,
  `description` VARCHAR(255)          DEFAULT NULL,
  `create_time` DATETIME              DEFAULT NULL,
  `update_time` DATETIME              DEFAULT NULL,
  PRIMARY KEY (`id`)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

CREATE TABLE `asap_alarm` (
  `id`                VARCHAR(64) NOT NULL,
  `report_time`       VARCHAR(64)   DEFAULT NULL,
  `protocol`          VARCHAR(128)  DEFAULT NULL,
  `destination_ip`    VARCHAR(32)   DEFAULT NULL,
  `may_affected_area` VARCHAR(128)  DEFAULT NULL,
  `device_type`       VARCHAR(128)  DEFAULT NULL,
  `type`              VARCHAR(500)  DEFAULT NULL,
  `affected_resource` VARCHAR(500)  DEFAULT NULL,
  `occur_time`        VARCHAR(64)   DEFAULT NULL,
  `no`                VARCHAR(64)   DEFAULT NULL,
  `detail`            VARCHAR(500)  DEFAULT NULL,
  `source`            VARCHAR(64)   DEFAULT NULL,
  `http_rescode`      INT(11)       DEFAULT 0,
  `must_done_time`    VARCHAR(64)   DEFAULT NULL,
  `evidence`          VARCHAR(500)  DEFAULT NULL,
  `http_uri`          VARCHAR(1500) DEFAULT NULL,
  `found_time`        VARCHAR(64)   DEFAULT NULL,
  `company`           VARCHAR(64)   DEFAULT NULL,
  `device_ip`         VARCHAR(32)   DEFAULT NULL,
  `http_host`         VARCHAR(128)  DEFAULT NULL,
  `destination_port`  INT(11)       DEFAULT 0,
  `infosys_name`      VARCHAR(128)  DEFAULT NULL,
  `log_type`          VARCHAR(32)   DEFAULT NULL,
  `http_ua`           VARCHAR(500)  DEFAULT NULL,
  `level`             INT(11)       DEFAULT 0,
  `log_id`            VARCHAR(128)  DEFAULT NULL,
  `http_cmd`          VARCHAR(32)   DEFAULT NULL,
  `source_ip`         VARCHAR(32)   DEFAULT NULL,
  `alarm_name`        VARCHAR(128)  DEFAULT NULL,
  `device_name`       VARCHAR(128)  DEFAULT NULL,
  `source_port`       INT(11)       DEFAULT 0,
  `report_time_long`  BIGINT(20)    DEFAULT 0,
  `occur_time_long`   BIGINT(20)    DEFAULT 0,
  `found_time_long`   BIGINT(20)    DEFAULT 0,
  `report_time_date`  DATETIME      DEFAULT NULL,
  `occur_time_date`   DATETIME      DEFAULT NULL,
  `found_time_date`   DATETIME      DEFAULT NULL,
  PRIMARY KEY (`id`)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;


CREATE TABLE `screen_bu_nei_si_ju_risk_score` (
  `id`             INT(11)      NOT NULL AUTO_INCREMENT,
  `system_name`    VARCHAR(50)  NOT NULL UNIQUE KEY,
  `zhu_guan_si_ju` VARCHAR(100) NOT NULL,
  `risk_score`     FLOAT(11)             DEFAULT 0,
  `create_time`    DATETIME              DEFAULT NULL,
  `update_time`    DATETIME              DEFAULT NULL,
  PRIMARY KEY (`id`)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

CREATE TABLE `screen_foreign_threat` (
  `id`                 INT(11)     NOT NULL AUTO_INCREMENT,
  `source`             VARCHAR(50) NOT NULL,
  `foreign_ip`         VARCHAR(20) NOT NULL,
  `foreign_ip_flag`    VARCHAR(20) NOT NULL,
  `foreign_ip_country` VARCHAR(20)          DEFAULT "",
  `foreign_ip_city`    VARCHAR(20)          DEFAULT "",
  `foreign_ip_lon`     DOUBLE(16, 6)        DEFAULT NULL,
  `foreign_ip_lat`     DOUBLE(16, 6)        DEFAULT NULL,
  `inner_ip`           VARCHAR(20) NOT NULL,
  `inner_ip_flag`      VARCHAR(20) NOT NULL,
  `inner_ip_country`   VARCHAR(20)          DEFAULT "",
  `inner_ip_city`      VARCHAR(20)          DEFAULT "",
  `inner_ip_lon`       DOUBLE(16, 6)        DEFAULT NULL,
  `inner_ip_lat`       DOUBLE(16, 6)        DEFAULT NULL,
  `system_name`        VARCHAR(50) NOT NULL,
  `create_time`        DATETIME             DEFAULT NULL,
  `update_time`        DATETIME             DEFAULT NULL,
  PRIMARY KEY (`id`)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

#值班表
CREATE TABLE `screen_zhi_ban_biao` (
  `id`                    INT(11)      NOT NULL AUTO_INCREMENT,
  `unit_name`             VARCHAR(50)  NOT NULL,
  `duty_leader`           VARCHAR(100) NOT NULL,
  `duty_leader_telphone`  VARCHAR(11)  NOT NULL,
  `duty_officer`          VARCHAR(100) NOT NULL,
  `duty_officer_telphone` VARCHAR(11)  NOT NULL,
  `create_time`           DATETIME              DEFAULT NULL,
  `update_time`           DATETIME              DEFAULT NULL,
  PRIMARY KEY (`id`)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;


#网站运行情况
CREATE TABLE `screen_wang_zhan_yun_xing_qing_kuang` (
  `id`                   INT(11)      NOT NULL AUTO_INCREMENT,
  `system_name`          VARCHAR(50)  NOT NULL,
  `yu_ming`              VARCHAR(100) NOT NULL,
  `ke_yong_xing`         VARCHAR(100) NOT NULL,
  `lian_xi_ren`          VARCHAR(10)  NOT NULL,
  `lian_xi_ren_telphone` VARCHAR(11)  NOT NULL,
  `create_time`          DATETIME              DEFAULT NULL,
  `update_time`          DATETIME              DEFAULT NULL,
  PRIMARY KEY (`id`)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

#行业漏洞风险
CREATE TABLE `screen_hang_ye_lou_dong_feng_xian` (
  `id`                     INT(11)      NOT NULL AUTO_INCREMENT,
  `system_name`            VARCHAR(50)  NOT NULL,
  `zhu_guan_dan_wei`       VARCHAR(100) NOT NULL,
  `lou_dong_type`          VARCHAR(100)          DEFAULT NULL,
  `lou_dong_deng_ji`       VARCHAR(100) NOT NULL,
  `lian_luo_yuan`          VARCHAR(10)  NOT NULL,
  `lian_luo_yuan_telphone` VARCHAR(11)  NOT NULL,
  `zheng_gai_qing_kuang`   VARCHAR(100) NOT NULL,
  `create_time`            DATETIME              DEFAULT NULL,
  `update_time`            DATETIME              DEFAULT NULL,
  PRIMARY KEY (`id`)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

#行业安全事件
CREATE TABLE `screen_hang_ye_an_quan_shi_jian` (
  `id`                  INT(11)      NOT NULL AUTO_INCREMENT,
  `system_name`         VARCHAR(50)  NOT NULL,
  `shi_jian_qing_kuang` VARCHAR(100) NOT NULL,
  `shi_jian_lai_yuan`   VARCHAR(100) NOT NULL,
  `ze_ren_ren`          VARCHAR(10)  NOT NULL,
  `ze_ren_ren_telphone` VARCHAR(11)  NOT NULL,
  `chu_zhi_zhuang_tai`  VARCHAR(100) NOT NULL,
  `create_time`         DATETIME              DEFAULT NULL,
  `update_time`         DATETIME              DEFAULT NULL,
  PRIMARY KEY (`id`)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

#行业态势统计
CREATE TABLE `screen_hang_ye_tai_shi_tong_ji` (
  `id`                                   INT(11)      NOT NULL AUTO_INCREMENT,
  `statistics_mouth`                     VARCHAR(50)  NOT NULL UNIQUE KEY,
  `malicious_code_attack`                VARCHAR(100) NOT NULL,
  `malicious_code_attack_description`    VARCHAR(100) NOT NULL,
  `denial_of_service_attack`             VARCHAR(100) NOT NULL,
  `denial_of_service_attack_description` VARCHAR(100) NOT NULL,
  `vulnerability_attack`                 VARCHAR(100) NOT NULL,
  `vulnerability_attack_description`     VARCHAR(100) NOT NULL,
  `scanning_detection`                   VARCHAR(100) NOT NULL,
  `scanning_detection_description`       VARCHAR(100) NOT NULL,
  `other_types_of_attacks`               VARCHAR(100) NOT NULL,
  `other_types_of_attacks_description`   VARCHAR(100) NOT NULL,
  `create_time`                          DATETIME              DEFAULT NULL,
  `update_time`                          DATETIME              DEFAULT NULL,
  PRIMARY KEY (`id`)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

#终端
CREATE TABLE `screen_terminal` (
  `id`              INT(11)     NOT NULL AUTO_INCREMENT,
  `ip`              VARCHAR(20) NOT NULL UNIQUE KEY,
  `user_name`       VARCHAR(100)         DEFAULT NULL,
  `room_number`     VARCHAR(20)          DEFAULT NULL,
  `department`      VARCHAR(50)          DEFAULT NULL,
  `attacked_status` VARCHAR(11)          DEFAULT '否',
  `create_time`     DATETIME             DEFAULT NULL,
  `update_time`     DATETIME             DEFAULT NULL,
  PRIMARY KEY (`id`)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;


#行业威胁排行
CREATE TABLE `screen_hang_ye_wei_xie_pai_hang` (
  `id`            INT(11)      NOT NULL AUTO_INCREMENT,
  `province_name` VARCHAR(50)  NOT NULL UNIQUE KEY,
  `threat_count`  VARCHAR(100) NOT NULL,
  `create_time`   DATETIME              DEFAULT NULL,
  `update_time`   DATETIME              DEFAULT NULL,
  PRIMARY KEY (`id`)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;


#攻击趋势
CREATE TABLE `screen_attack_tendency` (
  `id`           INT(11)     NOT NULL AUTO_INCREMENT,
  `the_day`      VARCHAR(20) NOT NULL UNIQUE KEY,
  `attack_count` INT(11)     NOT NULL DEFAULT 0,
  `create_time`  DATETIME             DEFAULT NULL,
  `update_time`  DATETIME             DEFAULT NULL,
  PRIMARY KEY (`id`)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

