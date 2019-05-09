# GLSL Shaders
## Introduction
This repository serves as a main location for all of my GLSL shaders.

The shaders found here are heavily linked to my GLSL pre-processor Ivaldi, [found here](https://github.com/TReed1104/ivaldi-glsl-builder).

This repository is linked to Ivaldi as a submodule. This was done for the following reasons:
* To allow for easy compilation of the raw source files as I implement them.
* To keep Ivaldi itself clean as a project, without the bloat of all the source files and components found here.

<br/>

---

## What Does This Repository Contain?
The source files found here come in two states, raw Ivaldi source files and GLSL shader source files.

<br/>

---

## Raw Ivaldi Source Files
Files found in the [source](https://github.com/TReed1104/glsl-shaders/tree/master/source) or [components](https://github.com/TReed1104/glsl-shaders/tree/master/components) folders are raw unprocessed source files ready to be compiled by Ivaldi.

These files contain "#include" directives, which must be processed by Ivaldi before the shaders are valid GLSL code.

<br/>

---

## Shader Source Files
Files found within the [shaders](https://github.com/TReed1104/glsl-shaders/tree/master/shaders) folder are source files which have already been compiled by Ivaldi. These source files are the compiled equivelents of the raw Ivaldi source files, they've been included in the repository for users who don't wish to compiled the source themselves.

These are the ready-to-use shader files to be loaded by OpenGL programs.

<br/>

---