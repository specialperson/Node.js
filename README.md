# login

// SQL 语句

// 插入
/* *
* INSERT INTO USER(NAME, AGE, SEX) VALUES ("6爷","66","男"),("7爷","77","男")
* INSERT INTO 表名(字段1, 字段2, ...) VALUES ("字段1的值","字段2的值",...)
* */

// 删除
/* *
* DELETE FROM USER
* 删除表中所有数据
  *
* DELETE FROM USER WHERE AGE >3 AND SEX="女"
* DELETE FROM 表名 WHERE 条件1 AND 条件2
  *
* */


// 改
/* *
* UPDATE USER SET NAME="更新后的名字",AGE=55,SEX="女" WHERE ID=20
* UPDATE 表名 SET 更改后字段="更改后字段的值" WHERE 更改前字段="更改前字段的值"
* */

// 查询
/* *
* SELECT * FROM USER
   *
* 查询 USER 表 年龄不等于 55 的 全部信息
* SELECT * FROMU SER WHERE AGE !=55
* SELECT * FROM USER WHERE AGE <> 55
   *
    *
* 指定内容查询
* SELECT NAME FROM USER WHERE AGE SEX="女"
   *
* 指定数据查询
* SELECT * FROM USER LIMIT 2,3
* 从0开始  第二个开始查询 查询3
   *
   *
* 模糊查询
* SELECT * FROM USER WHERE NAME LIKE "老%"
* SELECT * FROM USER WHERE NAME LIKE "%长"
   *
   * %: 零到多个字符"%包%"   包含  "包"  字的
     *
* */

// 排序
/* *
* 升序排列 (default)
* SELECT * FROM USER ORDER BY AGE
* SELECT * FROM USER ORDER BY AGE ASC
   *
* 降序排列
* SELECT * FROM USER ORDER BY AGE DESC
   *
* 按照拼音首字母排序
* SELECT * FROM USER ORDER BY CONVERT (NAME USING GBK)
* */