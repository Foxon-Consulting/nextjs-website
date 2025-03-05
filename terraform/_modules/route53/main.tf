# Configuration de l'association du domaine avec AWS Amplify

# Recherche de la zone hébergée Route53 existante
data "aws_route53_zone" "main" {
  name         = var.domain_name
  private_zone = false
}

# Association du domaine à l'application Amplify (branche principale)
resource "aws_amplify_domain_association" "main" {
  app_id      = var.aws_amplify_app_id
  domain_name = var.domain_name
  
  # Configuration pour le sous-domaine www
  sub_domain {
    branch_name = var.main_branch_name
    prefix      = "www"
  }
  
  # Configuration pour le domaine apex (sans www)
  sub_domain {
    branch_name = var.main_branch_name
    prefix      = ""
  }
  
  # Attendre que la vérification de propriété du domaine soit terminée
  wait_for_verification = true
}

# Association du domaine à l'application Amplify (branche UAT)
resource "aws_amplify_domain_association" "uat" {
  app_id      = var.aws_amplify_app_id
  domain_name = "uat.${var.domain_name}"

  sub_domain {
    branch_name = var.uat_branch_name
    prefix      = ""
  }

  sub_domain {
    branch_name = var.uat_branch_name
    prefix      = "www"
  }

  wait_for_verification = true
}





