
clean:
	@rm -rf documentation

build: clean
	@mkdocs build
	@mv site documentation
	@gulp
