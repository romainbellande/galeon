.DEFAULT_GOAL = help
## —— trivia ———————————————————————————————————————————————————————————————————————————————————————————————————————————
help: ## Outputs this help screen
	@grep -E '(^[a-zA-Z0-9_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

## —— galeon-api ———————————————————————————————————————————————————————————————————————————————————————————————————————————
migration-generate: ## [galeon-api] generate migration
	docker-compose exec server yarn typeorm:exec migration:generate -n $(name) -d src/migrations

migration-revert: ## [galeon-api] revert migration
	docker-compose exec server yarn typeorm:exec migration:revert

migration-run: ## [galeon-api] run migration
	docker-compose exec server yarn typeorm:exec migration:run

.PHONY: migration-generate migration-revert migration-run
