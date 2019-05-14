#version 330
#include glsl-shaders/components/fragment_in.glsl

#include glsl-shaders/components/fragment_out.glsl

#include glsl-shaders/components/global_uniforms.glsl

#include glsl-shaders/components/texture_uniforms.glsl
uniform vec3 u_textColour;

void main() {
	if (u_hasTexture) {
    	outputColour = vec4(u_textColour, 1.0) * vec4(1.0, 1.0, 1.0, texture(u_textureSampler, fragmentUV).r);
	}
	else {
		// Texturing has not been setup, use the colour buffer.
		outputColour = vec4(fragmentColour, 1.0f);
	}
}
