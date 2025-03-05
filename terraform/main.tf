module "amplify_app" {
  source = "./_modules/amplify"

  client = var.client
  environment = var.environment
  app_name = var.app_name
  repository_url = var.repository_url
  access_token = var.access_token
  main_branch_name = var.main_branch_name
  framework_type = var.framework_type
}


module "route53" {
  source = "./_modules/route53"

  domain_name = var.domain_name
  aws_amplify_app_id = module.amplify_app.amplify_app_id
  main_branch_name = var.main_branch_name
  amplify_cloudfront_domain = module.amplify_app.amplify_app_default_domain
  framework_type = var.framework_type

  depends_on = [module.amplify_app]
}

