// 2D Light Struct
struct Light2D {
    vec3 position;
    vec2 direction;     // used for spotlighting

    vec3 colour;
    float intensity;    // How far can the light reach?
    
    float spotlightAngle;
    float spotlightCutOff;
}

uniform Light2D light;
