#version 330
#include glsl-shaders/components/fragment_in.glsl

#include glsl-shaders/components/fragment_out.glsl

#include glsl-shaders/components/global_uniforms.glsl

#include glsl-shaders/components/global_functions.glsl

void main(){
	float clampedNosie = mod(noise(fragmentPosition.xy) * (iTime), 1);
	outputColour = vec4(vec3(clampedNosie), 1.0f);
}
