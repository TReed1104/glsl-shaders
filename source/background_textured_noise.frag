#version 330
#include glsl-shaders/components/fragment_in.glsl

#include glsl-shaders/components/fragment_out.glsl

#include glsl-shaders/components/global_uniforms.glsl

#include glsl-shaders/components/global_functions.glsl

void main() {
	float clampedNosie = mod(noise(gl_FragCoord.xy) * (u_time), 1);
	if(u_hasTexture) {
		outputColour = texture2D(u_textureSampler, UV) * vec4(vec3(clampedNosie), 1.0f);
	}
	else{
		// Texturing has not been setup, use the colour buffer.
		outputColour = vec4(vec3(clampedNosie), 1.0f);
	}
}
