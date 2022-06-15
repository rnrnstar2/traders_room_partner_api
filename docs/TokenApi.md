# TradersRoomPartnerApi.TokenApi

All URIs are relative to *{endpoint}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tokenGet**](TokenApi.md#tokenGet) | **GET** /token | 

<a name="tokenGet"></a>
# **tokenGet**
> TokenItem tokenGet(programId, jti)



You can create access tokens for your program.

### Example
```javascript
import {TradersRoomPartnerApi} from 'traders_room_partner_api';

let apiInstance = new TradersRoomPartnerApi.TokenApi();
let programId = "programId_example"; // String | Program's unique identification ID
let jti = "jti_example"; // String | Unique identifier for JWT. Used to prevent JWT replays

apiInstance.tokenGet(programId, jti, (error, data, response) => {
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
 **programId** | **String**| Program&#x27;s unique identification ID | 
 **jti** | **String**| Unique identifier for JWT. Used to prevent JWT replays | 

### Return type

[**TokenItem**](TokenItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

