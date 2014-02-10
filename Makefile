
build: components index.js
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components

sauce: build
	@component test sauce

phantom: build
	@component test phantom

browser: build
	@component test browser

.PHONY: clean
