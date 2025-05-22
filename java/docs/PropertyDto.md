

# PropertyDto


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**propertyId** | **String** |  |  |
|**propertyName** | **String** |  |  |
|**dataSchema** | [**DataSchema**](DataSchema.md) |  |  |
|**writable** | **Boolean** |  |  [optional] |
|**categories** | **List&lt;String&gt;** |  |  [optional] |
|**description** | **String** |  |  [optional] |
|**unit** | **String** |  |  [optional] |
|**refType** | [**RefTypeEnum**](#RefTypeEnum) |  |  [optional] |
|**tableRef** | [**TableRef**](TableRef.md) |  |  [optional] |



## Enum: RefTypeEnum

| Name | Value |
|---- | -----|
| TABLE | &quot;table&quot; |
| POINT | &quot;point&quot; |
| PROPERTY | &quot;property&quot; |



