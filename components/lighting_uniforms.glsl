struct Light {
    vec3 position; 
    vec3 direction;
    float cutOff;
    float outerCutOff;
    
    // Lighting value
    vec3 ambient;
    vec3 diffuse;
    vec3 specular;
	
    // Attenuation
    float constant;
    float linear;
    float quadratic;
};

uniform Light light;