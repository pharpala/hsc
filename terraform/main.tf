provider "aws" {
  region = "ca-central-1" # AWS region
}

resource "aws_cloudfront_origin_access_identity" "react_app_identity" {
  comment = "React App OAI"
}

resource "aws_s3_bucket" "react_app_bucket" {
  bucket = "cepssc-bucket-11"

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}

resource "aws_s3_bucket_object" "react_app_files" {
  bucket        = aws_s3_bucket.react_app_bucket.bucket
  key           = "index.html"
  source        = "../index.html"
  content_type  = "text/html"
}

resource "aws_cloudfront_distribution" "react_app_distribution" {
  origin {
    domain_name = aws_s3_bucket.react_app_bucket.bucket_regional_domain_name
    origin_id   = "S3-${aws_s3_bucket.react_app_bucket.id}"

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.react_app_identity.cloudfront_access_identity_path
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  comment             = "React App CloudFront Distribution"
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-${aws_s3_bucket.react_app_bucket.id}"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
  }

  price_class = "PriceClass_100"

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}
