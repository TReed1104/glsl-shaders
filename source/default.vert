#version 330
#include glsl-shaders/components/vertex_in.glsl

#include glsl-shaders/components/vertex_out.glsl

#include glsl-shaders/components/mvp_uniforms.glsl

void main() {
	// Set our vertex output values, these are what we use inside the fragment shaders
	fragmentPosition = vec3(u_modelMatrix * vec4(vertexPosition, 1.0));
	fragmentColour = vertexColor;
	UV = vertexUV;
	normal = mat3(transpose(inverse(u_modelMatrix))) * vertexNormal;

	// Output the positional value after applying the transformation matrices
	gl_Position = u_projectionMatrix * u_viewMatrix * u_modelMatrix * vec4(vertexPosition, 1.0);
}
