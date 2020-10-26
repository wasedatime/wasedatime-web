import json
import boto3
from boto3.dynamodb.conditions import Key
from decimal import Decimal
from re import fullmatch

class DecimalEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Decimal):
            return float(obj)
        return json.JSONEncoder.default(self, obj)

def handler(event, context):
    try:
        db = boto3.resource("dynamodb", region_name="ap-northeast-1")
        table = db.Table("CourseReview")
        course_keys = json.loads(event["body"])["course_keys"]
    except Exception:
        return {
            "statusCode": 500,
            "headers": {
                "Content-Type": "application/json"
            },
            "body": '{"success":false,"data":null,"message":"Sorry, our service is temporarily unavailable."}'
        }

    results = []
    for key in course_keys:
        comments = dict()
        comments["course_key"] = key
        query_response = table.query(
            KeyConditionExpression=Key("course_key").eq(key)
        )
        comments["comments"] = query_response["Items"]
        results.append(comments)
    api_response = {"success": True, "data": results}
    return {
        "isBase64Encoded": False,
        'statusCode': 200,
        'headers': {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST,OPTION",
            "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
        },
        'body': json.dumps(api_response, cls=DecimalEncoder, ensure_ascii=False).encode('utf8')
    }
