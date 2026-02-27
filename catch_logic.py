# catch_logic.py
from dataclasses import dataclass

@dataclass
class AridCrop:
    name: str
    min_rainfall: int # mm/year
    drought_trait: str

class WaterStrategyEngine:
    def __init__(self):
        self.drought_crops = [
            AridCrop("Pearl Millet", 250, "Rapid phenological development"),
            AridCrop("Sorghum", 400, "Deep root systems"),
            AridCrop("Cowpea", 300, "Succulent leaf habit"),
            AridCrop("Pigeon Pea", 500, "Desiccation tolerance")
        ]

    def calculate_runoff(self, rainfall_mm, curve_number, area_m2):
        """
        Calculates potential harvestable water using SCS-CN method.
        S = Potential maximum retention
        Q = Runoff in mm
        """
        if rainfall_mm < (0.2 * (25400 / curve_number - 254)):
            return 0
        
        S = (25400 / curve_number) - 254
        Ia = 0.2 * S # Initial abstraction
        Q = ((rainfall_mm - Ia) ** 2) / (rainfall_mm - Ia + S)
        
        total_liters = Q * area_m2
        return round(total_liters, 2)

    def recommend_crops(self, annual_rainfall):
        return [crop for crop in self.drought_crops if crop.min_rainfall <= annual_rainfall]

# Example Usage
engine = WaterStrategyEngine()
harvest = engine.calculate_runoff(rainfall_mm=150, curve_number=85, area_m2=1000)
print(f"Potential Water Captured: {harvest} Liters")