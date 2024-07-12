#!/bin/bash

up:
	docker compose up -d
build:
	docker compose up -d --build
log:
	docker logs front
exec:
	docker exec -it front bash

