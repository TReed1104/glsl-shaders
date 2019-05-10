#version 330
#include glsl-shaders/components/fragment_in.glsl

#include glsl-shaders/components/fragment_out.glsl

#include glsl-shaders/components/global_uniforms.glsl

#include glsl-shaders/components/texture_uniforms.glsl

void main() {
	if (u_hasTexture) {
		outputColour = texture2D(u_textureSampler, fragmentUV);
	}
	else {
		// Texturing has not been setup, use the colour buffer.
		outputColour = vec4(fragmentColour, 1.0f);
	}
}