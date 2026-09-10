"""
Unit tests for CraftConnect AI / ML Engine
"""

from models import (
    PricingRequest, DynamicPricingEngine,
    VoiceCatalogRequest, VoiceCatalogEngine,
    ImageEnhanceRequest, ImageStudioEngine
)

def test_dynamic_pricing():
    req = PricingRequest(
        category="Terracotta & Clay Pottery",
        raw_material_cost=450.0,
        crafting_hours=14.0,
        artisan_experience_years=10,
        region="Uttar Pradesh",
        is_odop_certified=True,
        target_channel="ALL"
    )
    res = DynamicPricingEngine.calculate_price(req)
    print("Pricing result:", res.model_dump())
    assert res.suggested_ideal_price > res.suggested_min_price
    assert res.fair_wage_total > 0
    assert res.confidence_score >= 0.90
    print("✅ Dynamic Pricing Test Passed!")

def test_voice_nlp():
    req = VoiceCatalogRequest(
        audio_transcript="यह हमारा पारंपरिक बांकुरा मिट्टी का घोड़ा है जिसे हमने हाथ से बनाया है।",
        spoken_language="Hindi",
        artisan_name="Rameshwar Prajapati",
        state="Uttar Pradesh"
    )
    res = VoiceCatalogEngine.process_voice_transcript(req)
    print("Voice NLP result:", res.model_dump())
    assert "Terracotta" in res.extracted_category
    assert len(res.short_bullet_points) > 0
    print("✅ Voice NLP Test Passed!")

def test_image_studio():
    req = ImageEnhanceRequest(
        preset_style="Warm Heritage Studio",
        remove_background=True,
        enhance_lighting=True
    )
    res = ImageStudioEngine.generate_enhancement_metadata(req)
    print("Image Studio result:", res)
    assert res["e_commerce_ready"] is True
    print("✅ Image Studio Test Passed!")

if __name__ == "__main__":
    test_dynamic_pricing()
    test_voice_nlp()
    test_image_studio()
    print("🎉 All AI service tests passed successfully!")
