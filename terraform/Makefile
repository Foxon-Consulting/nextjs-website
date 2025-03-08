.PHONY: init plan apply destroy
.ONESHELL:
.SHELL := /bin/ash

ENV_PATH := $(shell pwd)

# Check necessary tools
ifeq (, $(shell which aws))
	$(error "No aws in $(PATH), consider installing awscli")
endif
ifeq (, $(shell which terraform))
	$(error "No terraform in $(PATH), consider installing terraform")
endif

init: 
	@echo "Initializing terraform"
	terraform init -backend-config="amplify.tfbackend" -reconfigure

plan: init
	@echo "Planning terraform"
	terraform plan -var-file="amplify.tfvars"

apply: init
	@echo "Applying terraform"
	terraform apply -var-file="amplify.tfvars" -auto-approve

destroy: init
	@echo "Destroying terraform"
	terraform destroy -var-file="amplify.tfvars" -auto-approve
