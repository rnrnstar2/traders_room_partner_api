# TradersRoomPartnerApi.ProgramMembersApi

All URIs are relative to *{endpoint}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**updateProgramMembers**](ProgramMembersApi.md#updateProgramMembers) | **PUT** /programMembers | 

<a name="updateProgramMembers"></a>
# **updateProgramMembers**
> SuccessResponse updateProgramMembers(body)



You can set pips for members.

### Example
```javascript
import {TradersRoomPartnerApi} from 'traders_room_partner_api';
let defaultClient = TradersRoomPartnerApi.ApiClient.instance;


let apiInstance = new TradersRoomPartnerApi.ProgramMembersApi();
let body = new TradersRoomPartnerApi.ProgramMembers(); // ProgramMembers | 

apiInstance.updateProgramMembers(body, (error, data, response) => {
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
 **body** | [**ProgramMembers**](ProgramMembers.md)|  | 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

