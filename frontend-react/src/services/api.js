/**
 * CraftConnect API Client Service
 * Bridges React Frontend to Spring Boot (:8080) and Python FastAPI (:8000)
 */

const API_BASE_URL = 'http://localhost:8080/api';
const AI_BASE_URL = 'http://localhost:8000/api/ai';

export const CraftConnectApi = {
  // Products
  async getProducts(params = {}) {
    const query = new URLSearchParams(params).toString();
    const res = await fetch(`${API_BASE_URL}/products${query ? `?${query}` : ''}`);
    return res.json();
  },

  async getProductById(id) {
    const res = await fetch(`${API_BASE_URL}/products/${id}`);
    return res.json();
  },

  async createProduct(productData) {
    const res = await fetch(`${API_BASE_URL}/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData)
    });
    return res.json();
  },

  // AI Microservice Direct Integrations
  async estimateDynamicPrice(pricingPayload) {
    try {
      const res = await fetch(`${AI_BASE_URL}/price-suggest`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pricingPayload)
      });
      return res.json();
    } catch (err) {
      // Fallback through Spring Boot AI Studio endpoint
      const res = await fetch(`${API_BASE_URL}/ai-studio/estimate-price`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pricingPayload)
      });
      return res.json();
    }
  },

  async generateVoiceCatalog(voicePayload) {
    try {
      const res = await fetch(`${AI_BASE_URL}/voice-catalog`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(voicePayload)
      });
      return res.json();
    } catch (err) {
      const res = await fetch(`${API_BASE_URL}/ai-studio/voice-catalog`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(voicePayload)
      });
      return res.json();
    }
  },

  async enhanceImagePreview(imagePayload) {
    const res = await fetch(`${AI_BASE_URL}/enhance-image`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(imagePayload)
    });
    return res.json();
  },

  // Orders
  async placeOrder(orderPayload) {
    const res = await fetch(`${API_BASE_URL}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderPayload)
    });
    return res.json();
  },

  // Artisans
  async getArtisans() {
    const res = await fetch(`${API_BASE_URL}/artisans`);
    return res.json();
  }
};
