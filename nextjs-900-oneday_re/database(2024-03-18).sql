CREATE DATABASE universityDB2;

DROP DATABASE universityDB2;

USE universityDB2;

CREATE TABLE tbl_student(
    s_code	VARCHAR(6)		PRIMARY KEY,
    s_name	VARCHAR(20)	NOT NULL	,
    s_dept	VARCHAR(20)	NOT NULL	,
    s_grade	VARCHAR(2)	NOT NULL	,
    s_tel	VARCHAR(15)		,
    s_addr	VARCHAR(125)	
);

CREATE TABLE tbl_point(
p_code	VARCHAR(6)		PRIMARY KEY,
    p_name	VARCHAR(20)	NOT NULL

);



CREATE TABLE tbl_stu_point(
 r_scode	VARCHAR(6)	NOT NULL,
    r_pcode	VARCHAR(6)	NOT NULL,
    r_pscore	INT 	NOT NULL,
        CONSTRAINT ah_pk PRIMARY KEY(r_scode,r_pcode)

);


SELECT * FROM tbl_point;

SELECT * FROM tbl_student;


SELECT * FROM tbl_stu_point;

