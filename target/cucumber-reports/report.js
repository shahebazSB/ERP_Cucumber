$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeatureFiles/ERPStock.feature");
formatter.feature({
  "name": "",
  "description": "Validate customer and supplier modules",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "",
  "description": "validate supplier with multiple set of data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@supplier"
    }
  ]
});
formatter.step({
  "name": "Launch Browser",
  "keyword": "Given "
});
formatter.step({
  "name": "Launch Url",
  "keyword": "When "
});
formatter.step({
  "name": "Wait for Username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\" and \"admin\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter password with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click login button with \"id\" and \"btnsubmit\"",
  "keyword": "When "
});
formatter.step({
  "name": "wait for logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Wait for Supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click Supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Wait for Add icon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click Add icon button with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Wait for Supplier Number with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.step({
  "name": "Capture Supplier Number with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cSupplierName\u003e\" with \"id\" and \"x_Supplier_Name\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003caddress\u003e\" with \"xpath\" and \"//*[@id\u003d\u0027x_Address\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003ccity\u003e\" with \"xpath\" and \"//*[@id\u003d\u0027x_City\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003ccountry\u003e\" with \"xpath\" and \"//*[@id\u003d\u0027x_Country\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003ccperson\u003e\" with \"xpath\" and \"//*[@id\u003d\u0027x_Contact_Person\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cpnumber\u003e\" with \"xpath\" and \"//*[@id\u003d\u0027x_Phone_Number\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cmail\u003e\" with \"xpath\" and \"//*[@id\u003d\u0027x__Email\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cmnumber\u003e\" with \"xpath\" and \"//*[@id\u003d\u0027x_Mobile_Number\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cnote\u003e\" with \"xpath\" and \"//*[@id\u003d\u0027x_Notes\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "click add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.step({
  "name": "Wait for Confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Wait for alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Verify Supplier Number",
  "keyword": "When "
});
formatter.step({
  "name": "click logout with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Close Browser",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SupplierName",
        "address",
        "city",
        "country",
        "cperson",
        "pnumber",
        "mail",
        "mnumber",
        "note"
      ]
    },
    {
      "cells": [
        "selenim1",
        "srnagar1",
        "Hyderabad",
        "India",
        "Qedge31",
        "6547895412",
        "test@gmail.com",
        "6321456987",
        "New Supplier Adding"
      ]
    },
    {
      "cells": [
        "selenim41",
        "srnagar71",
        "Hyderabad",
        "India",
        "Qedge351",
        "6547895412",
        "test@gmail.com",
        "6321456987",
        "New Supplier Adding"
      ]
    },
    {
      "cells": [
        "selenim143",
        "srnagar132",
        "Hyderabad",
        "India",
        "Qedge361",
        "6547895412",
        "test@gmail.com",
        "6321456987",
        "New Supplier Adding"
      ]
    },
    {
      "cells": [
        "selenim132",
        "srnagar51",
        "Hyderabad",
        "India",
        "Qedge371",
        "6547895412",
        "test@gmail.com",
        "6321456987",
        "New Supplier Adding"
      ]
    },
    {
      "cells": [
        "selenim45",
        "srnagar51",
        "Hyderabad",
        "India",
        "Qedge317",
        "6547895412",
        "test@gmail.com",
        "6321456987",
        "New Supplier Adding"
      ]
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "validate supplier with multiple set of data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@supplier"
    }
  ]
});
formatter.step({
  "name": "Launch Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinations.launch_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Launch Url",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.launch_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Username_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_password_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login button with \"id\" and \"btnsubmit\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_login_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_logout_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Supplier_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_Supplier_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Add icon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Add_icon_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add icon button with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_Add_icon_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Supplier Number with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Supplier_Number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Capture Supplier Number with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.capture_Supplier_Number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"selenim1\" with \"id\" and \"x_Supplier_Name\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"srnagar1\" with \"xpath\" and \"//*[@id\u003d\u0027x_Address\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Hyderabad\" with \"xpath\" and \"//*[@id\u003d\u0027x_City\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"India\" with \"xpath\" and \"//*[@id\u003d\u0027x_Country\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Qedge31\" with \"xpath\" and \"//*[@id\u003d\u0027x_Contact_Person\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"6547895412\" with \"xpath\" and \"//*[@id\u003d\u0027x_Phone_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"test@gmail.com\" with \"xpath\" and \"//*[@id\u003d\u0027x__Email\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"6321456987\" with \"xpath\" and \"//*[@id\u003d\u0027x_Mobile_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"New Supplier Adding\" with \"xpath\" and \"//*[@id\u003d\u0027x_Notes\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_add_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Confirm_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_confirm_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_Alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Supplier Number",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.verify_Supplier_Number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click logout with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_logout_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close Browser",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.close_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "validate supplier with multiple set of data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@supplier"
    }
  ]
});
formatter.step({
  "name": "Launch Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinations.launch_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Launch Url",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.launch_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Username_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_password_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login button with \"id\" and \"btnsubmit\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_login_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_logout_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Supplier_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_Supplier_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Add icon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Add_icon_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add icon button with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_Add_icon_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Supplier Number with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Supplier_Number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Capture Supplier Number with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.capture_Supplier_Number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"selenim41\" with \"id\" and \"x_Supplier_Name\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"srnagar71\" with \"xpath\" and \"//*[@id\u003d\u0027x_Address\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Hyderabad\" with \"xpath\" and \"//*[@id\u003d\u0027x_City\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"India\" with \"xpath\" and \"//*[@id\u003d\u0027x_Country\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Qedge351\" with \"xpath\" and \"//*[@id\u003d\u0027x_Contact_Person\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"6547895412\" with \"xpath\" and \"//*[@id\u003d\u0027x_Phone_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"test@gmail.com\" with \"xpath\" and \"//*[@id\u003d\u0027x__Email\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"6321456987\" with \"xpath\" and \"//*[@id\u003d\u0027x_Mobile_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"New Supplier Adding\" with \"xpath\" and \"//*[@id\u003d\u0027x_Notes\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_add_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Confirm_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_confirm_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_Alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Supplier Number",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.verify_Supplier_Number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click logout with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_logout_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close Browser",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.close_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "validate supplier with multiple set of data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@supplier"
    }
  ]
});
formatter.step({
  "name": "Launch Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinations.launch_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Launch Url",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.launch_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Username_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_password_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login button with \"id\" and \"btnsubmit\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_login_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_logout_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Supplier_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_Supplier_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Add icon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Add_icon_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add icon button with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_Add_icon_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Supplier Number with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Supplier_Number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Capture Supplier Number with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.capture_Supplier_Number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"selenim143\" with \"id\" and \"x_Supplier_Name\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"srnagar132\" with \"xpath\" and \"//*[@id\u003d\u0027x_Address\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Hyderabad\" with \"xpath\" and \"//*[@id\u003d\u0027x_City\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"India\" with \"xpath\" and \"//*[@id\u003d\u0027x_Country\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Qedge361\" with \"xpath\" and \"//*[@id\u003d\u0027x_Contact_Person\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"6547895412\" with \"xpath\" and \"//*[@id\u003d\u0027x_Phone_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"test@gmail.com\" with \"xpath\" and \"//*[@id\u003d\u0027x__Email\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"6321456987\" with \"xpath\" and \"//*[@id\u003d\u0027x_Mobile_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"New Supplier Adding\" with \"xpath\" and \"//*[@id\u003d\u0027x_Notes\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_add_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Confirm_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_confirm_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_Alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Supplier Number",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.verify_Supplier_Number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click logout with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_logout_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close Browser",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.close_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "validate supplier with multiple set of data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@supplier"
    }
  ]
});
formatter.step({
  "name": "Launch Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinations.launch_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Launch Url",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.launch_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Username_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_password_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login button with \"id\" and \"btnsubmit\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_login_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_logout_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Supplier_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_Supplier_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Add icon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Add_icon_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add icon button with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_Add_icon_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Supplier Number with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Supplier_Number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Capture Supplier Number with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.capture_Supplier_Number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"selenim132\" with \"id\" and \"x_Supplier_Name\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"srnagar51\" with \"xpath\" and \"//*[@id\u003d\u0027x_Address\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Hyderabad\" with \"xpath\" and \"//*[@id\u003d\u0027x_City\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"India\" with \"xpath\" and \"//*[@id\u003d\u0027x_Country\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Qedge371\" with \"xpath\" and \"//*[@id\u003d\u0027x_Contact_Person\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"6547895412\" with \"xpath\" and \"//*[@id\u003d\u0027x_Phone_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"test@gmail.com\" with \"xpath\" and \"//*[@id\u003d\u0027x__Email\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"6321456987\" with \"xpath\" and \"//*[@id\u003d\u0027x_Mobile_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"New Supplier Adding\" with \"xpath\" and \"//*[@id\u003d\u0027x_Notes\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_add_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Confirm_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_confirm_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_Alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Supplier Number",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.verify_Supplier_Number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click logout with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_logout_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close Browser",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.close_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "validate supplier with multiple set of data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@supplier"
    }
  ]
});
formatter.step({
  "name": "Launch Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinations.launch_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Launch Url",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.launch_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Username_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_password_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login button with \"id\" and \"btnsubmit\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_login_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_logout_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Supplier_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_Supplier_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Add icon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Add_icon_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add icon button with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_Add_icon_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Supplier Number with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Supplier_Number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Capture Supplier Number with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.capture_Supplier_Number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"selenim45\" with \"id\" and \"x_Supplier_Name\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"srnagar51\" with \"xpath\" and \"//*[@id\u003d\u0027x_Address\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Hyderabad\" with \"xpath\" and \"//*[@id\u003d\u0027x_City\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"India\" with \"xpath\" and \"//*[@id\u003d\u0027x_Country\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Qedge317\" with \"xpath\" and \"//*[@id\u003d\u0027x_Contact_Person\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"6547895412\" with \"xpath\" and \"//*[@id\u003d\u0027x_Phone_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"test@gmail.com\" with \"xpath\" and \"//*[@id\u003d\u0027x__Email\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"6321456987\" with \"xpath\" and \"//*[@id\u003d\u0027x_Mobile_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"New Supplier Adding\" with \"xpath\" and \"//*[@id\u003d\u0027x_Notes\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_add_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Confirm_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_confirm_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_Alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Supplier Number",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.verify_Supplier_Number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click logout with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_logout_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close Browser",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.close_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "",
  "description": "validate supplier with multiple set of data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tagCustomer"
    }
  ]
});
formatter.step({
  "name": "Launch Browser",
  "keyword": "Given "
});
formatter.step({
  "name": "Launch Url",
  "keyword": "When "
});
formatter.step({
  "name": "Wait for Username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\" and \"admin\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter password with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click login button with \"id\" and \"btnsubmit\"",
  "keyword": "When "
});
formatter.step({
  "name": "wait for logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Wait for Customer link with \"xpath\" and \"(//a[contains(text(),\u0027Customers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click customer link with \"xpath\" and \"(//a[contains(text(),\u0027Customers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Wait for Add icon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click Add icon button with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Wait for customer Number with \"name\" and \"x_Customer_Number\"",
  "keyword": "When "
});
formatter.step({
  "name": "Capture Customer Number with \"name\" and \"x_Customer_Number\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cCustomerName\u003e\" with \"name\" and \"x_Customer_Name\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003caddress\u003e\" with \"xpath\" and \"//textarea[@id\u003d\u0027x_Address\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003ccity\u003e\" with \"xpath\" and \"//input[@id\u003d\u0027x_City\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003ccountry\u003e\" with \"xpath\" and \"//input[@id\u003d\u0027x_Country\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003ccperson\u003e\" with \"xpath\" and \"//input[@id\u003d\u0027x_Contact_Person\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cpnumber\u003e\" with \"xpath\" and \"//input[@id\u003d\u0027x_Phone_Number\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cmail\u003e\" with \"xpath\" and \"//input[@id\u003d\u0027x__Email\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cmnumber\u003e\" with \"xpath\" and \"//input[@id\u003d\u0027x_Mobile_Number\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cnote\u003e\" with \"xpath\" and \"//input[@id\u003d\u0027x_Notes\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "click add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.step({
  "name": "Wait for Confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Wait for alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Verify Customer Number",
  "keyword": "When "
});
formatter.step({
  "name": "click logout with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Close Browser",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "CustomerName",
        "address",
        "city",
        "country",
        "cperson",
        "pnumber",
        "mail",
        "mnumber",
        "note"
      ]
    },
    {
      "cells": [
        "Akhil1",
        "Ameerpet1",
        "Hyderabad",
        "India",
        "Qedge1",
        "6547895412",
        "test@gmail.com",
        "6321456987",
        "New Customer Adding"
      ]
    },
    {
      "cells": [
        "Akhil4",
        "Ameerpet6",
        "Hyderabad",
        "India",
        "Qedge18",
        "6547895412",
        "test@gmail.com",
        "6321456987",
        "New Customer Adding"
      ]
    },
    {
      "cells": [
        "Akhil5",
        "Ameerpet15",
        "Hyderabad",
        "India",
        "Qedge15",
        "6547895412",
        "test@gmail.com",
        "6321456987",
        "New Customer Adding"
      ]
    },
    {
      "cells": [
        "Akhil6",
        "Ameerpet187",
        "Hyderabad",
        "India",
        "Qedge156",
        "6547895412",
        "test@gmail.com",
        "6321456987",
        "New Customer Adding"
      ]
    },
    {
      "cells": [
        "Akhil154",
        "Ameerpet156",
        "Hyderabad",
        "India",
        "Qedge1567",
        "6547895412",
        "test@gmail.com",
        "6321456987",
        "New Customer Adding"
      ]
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "validate supplier with multiple set of data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tagCustomer"
    }
  ]
});
formatter.step({
  "name": "Launch Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinations.launch_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Launch Url",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.launch_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Username_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_password_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login button with \"id\" and \"btnsubmit\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_login_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_logout_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Customer link with \"xpath\" and \"(//a[contains(text(),\u0027Customers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Customer_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click customer link with \"xpath\" and \"(//a[contains(text(),\u0027Customers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_customer_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Add icon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Add_icon_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add icon button with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_Add_icon_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for customer Number with \"name\" and \"x_Customer_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_customer_Number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Capture Customer Number with \"name\" and \"x_Customer_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.capture_Customer_Number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Akhil1\" with \"name\" and \"x_Customer_Name\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Ameerpet1\" with \"xpath\" and \"//textarea[@id\u003d\u0027x_Address\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Hyderabad\" with \"xpath\" and \"//input[@id\u003d\u0027x_City\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"India\" with \"xpath\" and \"//input[@id\u003d\u0027x_Country\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Qedge1\" with \"xpath\" and \"//input[@id\u003d\u0027x_Contact_Person\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"6547895412\" with \"xpath\" and \"//input[@id\u003d\u0027x_Phone_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"test@gmail.com\" with \"xpath\" and \"//input[@id\u003d\u0027x__Email\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"6321456987\" with \"xpath\" and \"//input[@id\u003d\u0027x_Mobile_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"New Customer Adding\" with \"xpath\" and \"//input[@id\u003d\u0027x_Notes\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_add_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Confirm_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_confirm_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_Alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Customer Number",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.verify_Customer_Number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click logout with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_logout_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close Browser",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.close_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "validate supplier with multiple set of data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tagCustomer"
    }
  ]
});
formatter.step({
  "name": "Launch Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinations.launch_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Launch Url",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.launch_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Username_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_password_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login button with \"id\" and \"btnsubmit\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_login_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_logout_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Customer link with \"xpath\" and \"(//a[contains(text(),\u0027Customers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Customer_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click customer link with \"xpath\" and \"(//a[contains(text(),\u0027Customers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_customer_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Add icon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Add_icon_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add icon button with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_Add_icon_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for customer Number with \"name\" and \"x_Customer_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_customer_Number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Capture Customer Number with \"name\" and \"x_Customer_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.capture_Customer_Number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Akhil4\" with \"name\" and \"x_Customer_Name\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Ameerpet6\" with \"xpath\" and \"//textarea[@id\u003d\u0027x_Address\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Hyderabad\" with \"xpath\" and \"//input[@id\u003d\u0027x_City\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"India\" with \"xpath\" and \"//input[@id\u003d\u0027x_Country\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Qedge18\" with \"xpath\" and \"//input[@id\u003d\u0027x_Contact_Person\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"6547895412\" with \"xpath\" and \"//input[@id\u003d\u0027x_Phone_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"test@gmail.com\" with \"xpath\" and \"//input[@id\u003d\u0027x__Email\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"6321456987\" with \"xpath\" and \"//input[@id\u003d\u0027x_Mobile_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"New Customer Adding\" with \"xpath\" and \"//input[@id\u003d\u0027x_Notes\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_add_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Confirm_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_confirm_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_Alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Customer Number",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.verify_Customer_Number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click logout with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_logout_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close Browser",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.close_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "validate supplier with multiple set of data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tagCustomer"
    }
  ]
});
formatter.step({
  "name": "Launch Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinations.launch_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Launch Url",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.launch_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Username_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_password_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login button with \"id\" and \"btnsubmit\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_login_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_logout_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Customer link with \"xpath\" and \"(//a[contains(text(),\u0027Customers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Customer_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click customer link with \"xpath\" and \"(//a[contains(text(),\u0027Customers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_customer_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Add icon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Add_icon_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add icon button with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_Add_icon_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for customer Number with \"name\" and \"x_Customer_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_customer_Number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Capture Customer Number with \"name\" and \"x_Customer_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.capture_Customer_Number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Akhil5\" with \"name\" and \"x_Customer_Name\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Ameerpet15\" with \"xpath\" and \"//textarea[@id\u003d\u0027x_Address\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Hyderabad\" with \"xpath\" and \"//input[@id\u003d\u0027x_City\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"India\" with \"xpath\" and \"//input[@id\u003d\u0027x_Country\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Qedge15\" with \"xpath\" and \"//input[@id\u003d\u0027x_Contact_Person\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"6547895412\" with \"xpath\" and \"//input[@id\u003d\u0027x_Phone_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"test@gmail.com\" with \"xpath\" and \"//input[@id\u003d\u0027x__Email\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"6321456987\" with \"xpath\" and \"//input[@id\u003d\u0027x_Mobile_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"New Customer Adding\" with \"xpath\" and \"//input[@id\u003d\u0027x_Notes\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_add_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Confirm_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_confirm_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_Alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Customer Number",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.verify_Customer_Number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click logout with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_logout_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close Browser",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.close_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "validate supplier with multiple set of data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tagCustomer"
    }
  ]
});
formatter.step({
  "name": "Launch Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinations.launch_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Launch Url",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.launch_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Username_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_password_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login button with \"id\" and \"btnsubmit\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_login_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_logout_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Customer link with \"xpath\" and \"(//a[contains(text(),\u0027Customers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Customer_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click customer link with \"xpath\" and \"(//a[contains(text(),\u0027Customers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_customer_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Add icon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Add_icon_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add icon button with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_Add_icon_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for customer Number with \"name\" and \"x_Customer_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_customer_Number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Capture Customer Number with \"name\" and \"x_Customer_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.capture_Customer_Number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Akhil6\" with \"name\" and \"x_Customer_Name\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Ameerpet187\" with \"xpath\" and \"//textarea[@id\u003d\u0027x_Address\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Hyderabad\" with \"xpath\" and \"//input[@id\u003d\u0027x_City\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"India\" with \"xpath\" and \"//input[@id\u003d\u0027x_Country\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Qedge156\" with \"xpath\" and \"//input[@id\u003d\u0027x_Contact_Person\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"6547895412\" with \"xpath\" and \"//input[@id\u003d\u0027x_Phone_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"test@gmail.com\" with \"xpath\" and \"//input[@id\u003d\u0027x__Email\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"6321456987\" with \"xpath\" and \"//input[@id\u003d\u0027x_Mobile_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"New Customer Adding\" with \"xpath\" and \"//input[@id\u003d\u0027x_Notes\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_add_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Confirm_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_confirm_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_Alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Customer Number",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.verify_Customer_Number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click logout with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_logout_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close Browser",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.close_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "validate supplier with multiple set of data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tagCustomer"
    }
  ]
});
formatter.step({
  "name": "Launch Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinations.launch_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Launch Url",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.launch_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Username_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_password_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login button with \"id\" and \"btnsubmit\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_login_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_logout_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Customer link with \"xpath\" and \"(//a[contains(text(),\u0027Customers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Customer_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click customer link with \"xpath\" and \"(//a[contains(text(),\u0027Customers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_customer_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Add icon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Add_icon_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add icon button with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_Add_icon_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for customer Number with \"name\" and \"x_Customer_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_customer_Number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Capture Customer Number with \"name\" and \"x_Customer_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.capture_Customer_Number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Akhil154\" with \"name\" and \"x_Customer_Name\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Ameerpet156\" with \"xpath\" and \"//textarea[@id\u003d\u0027x_Address\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Hyderabad\" with \"xpath\" and \"//input[@id\u003d\u0027x_City\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"India\" with \"xpath\" and \"//input[@id\u003d\u0027x_Country\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Qedge1567\" with \"xpath\" and \"//input[@id\u003d\u0027x_Contact_Person\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"6547895412\" with \"xpath\" and \"//input[@id\u003d\u0027x_Phone_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"test@gmail.com\" with \"xpath\" and \"//input[@id\u003d\u0027x__Email\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"6321456987\" with \"xpath\" and \"//input[@id\u003d\u0027x_Mobile_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"New Customer Adding\" with \"xpath\" and \"//input[@id\u003d\u0027x_Notes\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_add_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_Confirm_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_confirm_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.wait_for_alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_Alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Customer Number",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.verify_Customer_Number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click logout with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.click_logout_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close Browser",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.close_Browser()"
});
formatter.result({
  "status": "passed"
});
});