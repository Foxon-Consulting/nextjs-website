variable "client" {
  description = "Client name"
  type        = string
}

variable "environment" {
  description = "Environment name"
  type        = string
}

variable "app_name" {
  description = "Application name"
  type        = string
}

variable "repository_url" {
  description = "Repository url (without .git)"
  type        = string
}

variable "access_token" {
  description = "Access token"
  type        = string
  sensitive   = true
}

variable "main_branch_name" {
  description = "Main branch name"
  type        = string
  default     = "main"
}

variable "uat_branch_name" {
  description = "UAT branch name"
  type        = string
  default     = "uat"
}

variable "framework_type" {
  description = "Type de framework utilisé pour l'application (ex: Next.js - SSR)"
  type        = string
  default     = "Next.js - SSR"
}