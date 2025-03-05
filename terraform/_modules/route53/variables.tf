# Variables pour la configuration Route53 et domaine
variable "domain_name" {
  description = "Nom de domaine principal pour l'application (ex: foxonconsulting.com)"
  type        = string
}

variable "aws_amplify_app_id" {
  description = "ID de l'application Amplify"
  type        = string
}

variable "main_branch_name" {
  description = "Nom de la branche principale pour le déploiement"
  type        = string
  default     = "main"
}

variable "uat_branch_name" {
  description = "Nom de la branche UAT pour le déploiement"
  type        = string
  default     = "uat"
}


variable "amplify_cloudfront_domain" {
  description = "Domaine CloudFront généré par Amplify (ex: d3toivuk9miws8.cloudfront.net)"
  type        = string
}

variable "cloudfront_zone_id" {
  description = "Zone ID fixe pour CloudFront"
  type        = string
  default     = "Z2FDTNDATAQYW2" # Zone ID fixe pour tous les domaines CloudFront
}

variable "framework_type" {
  description = "Type de framework utilisé pour l'application (ex: Next.js - SSR)"
  type        = string
  default     = "Next.js - SSR"
}






