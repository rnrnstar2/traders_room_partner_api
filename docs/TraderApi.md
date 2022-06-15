# TradersRoomPartnerApi.TraderApi

All URIs are relative to *{endpoint}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**traderPost**](TraderApi.md#traderPost) | **POST** /trader | 
[**updateTrader**](TraderApi.md#updateTrader) | **PUT** /trader | 

<a name="traderPost"></a>
# **traderPost**
> SuccessResponse traderPost(body)



It is possible to create a new trader.

### Example
```javascript
import {TradersRoomPartnerApi} from 'traders_room_partner_api';
let defaultClient = TradersRoomPartnerApi.ApiClient.instance;


let apiInstance = new TradersRoomPartnerApi.TraderApi();
let body = new TradersRoomPartnerApi.Trader(); // Trader | 

apiInstance.traderPost(body, (error, data, response) => {
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
 **body** | [**Trader**](Trader.md)|  | 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTrader"></a>
# **updateTrader**
> SuccessResponse updateTrader(body)



Trader data can be updated.

### Example
```javascript
import {TradersRoomPartnerApi} from 'traders_room_partner_api';
let defaultClient = TradersRoomPartnerApi.ApiClient.instance;


let apiInstance = new TradersRoomPartnerApi.TraderApi();
let body = new TradersRoomPartnerApi.Trader(); // Trader | 

apiInstance.updateTrader(body, (error, data, response) => {
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
 **body** | [**Trader**](Trader.md)|  | 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

