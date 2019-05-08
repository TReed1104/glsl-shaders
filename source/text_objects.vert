#version 330
#include glsl-shaders/components/vertex_in.glsl

#include glsl-shaders/components/vertex_out.glsl

#include glsl-shaders/components/mvp_uniforms.glsl

void main() {
	fragmentColour = vertexColor;
	vec4 newPosition = vec4(vertexPosition, 1.0);
	gl_Position = u_projectionMatrix * u_viewMatrix * u_modelMatrix * newPosition;
	UV = vertexUV;
}
