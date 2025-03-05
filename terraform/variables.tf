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

variable "domain_name" {
  description = "Domain name"
  type        = string
}

variable "main_branch_name" {
  description = "Main branch name"
  type        = string
}

variable "framework_type" {
  description = "Framework type for Amplify app (e.g. 'Next.js - SSR')"
  type        = string
  default     = "Next.js - SSR"
}

