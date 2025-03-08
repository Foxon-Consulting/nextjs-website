module "amplify_app" {
  source = "github.com/Foxon-Consulting/iac-tf-aws-amplify-website.git?ref=main"

  client = var.client
  environment = var.environment
  app_name = var.app_name

  # Amplify
  repository_url = var.repository_url
  access_token = var.access_token

  # Route53
  domain_name = var.domain_name
  prd_branch_name = var.prd_branch_name

  framework_type = var.framework_type

  # Route53
  prefixlist = var.prefixlist

  # Basic auth
  basic_auth_username = var.basic_auth_username
  basic_auth_password = var.basic_auth_password

}
