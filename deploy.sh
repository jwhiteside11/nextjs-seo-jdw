#!/bin/bash

OUT_DIR=./out
AWS_CF_BUCKET=<INSERT_AWS_BUCKET>
AWS_CF_DIST_ID=<INSERT_CLOUDFRONT_DIST>

# build locally for production
npm run build

# copy files over to s3 bucket
aws s3 sync $OUT_DIR s3://$AWS_CF_BUCKET --delete

# invalidate cloudfront cache
aws cloudfront create-invalidation --distribution-id $AWS_CF_DIST_ID --paths "/*"