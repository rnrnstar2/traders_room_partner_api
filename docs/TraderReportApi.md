# TradersRoomPartnerApi.TraderReportApi

All URIs are relative to *{endpoint}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTraderReport**](TraderReportApi.md#addTraderReport) | **POST** /traderReport | 

<a name="addTraderReport"></a>
# **addTraderReport**
> SuccessResponse addTraderReport(body)



Trader report registration is possible

### Example
```javascript
import {TradersRoomPartnerApi} from 'traders_room_partner_api';
let defaultClient = TradersRoomPartnerApi.ApiClient.instance;


let apiInstance = new TradersRoomPartnerApi.TraderReportApi();
let body = new TradersRoomPartnerApi.TraderReport(); // TraderReport | 

apiInstance.addTraderReport(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TraderReport**](TraderReport.md)|  | 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

