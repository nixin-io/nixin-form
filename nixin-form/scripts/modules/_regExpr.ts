﻿export class _regExpr {
    italianMobilePhone= /^([+]39)?((38[{8,9}|0])|(34[{7-9}|0])|(36[6|8|0])|(33[{3-9}|0])|(32[{8,9}]))([\d]{7})$/;
    email= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    cap= /^(V-|I-)?[0-9]{5}$/;
    number= /^-?\d+$/;
    noNumber= /^([^0-9]*)$/;
    integer= /^\d+$/;
    float= /[+-]?([0-9]*[.])?[0-9]+/;
    negative= /^-\d*\.?\d+$/;
    genericPhoneNumber=  /(^[0-9\/\\]*)$/;
};
