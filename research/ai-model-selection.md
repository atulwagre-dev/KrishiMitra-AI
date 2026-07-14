# AI Model Selection

## Objective

Select the most suitable AI model for crop disease detection that provides high accuracy, fast inference, and can be deployed on low-end smartphones in the future.

---

## Models Compared

### 1. MobileNetV2 ✅ (Selected)

Advantages:
- Lightweight architecture
- Fast prediction speed
- Optimized for mobile devices
- Low memory usage
- Easy deployment using TensorFlow Lite
- Suitable for future offline support

Disadvantages:
- Slightly lower accuracy than larger models on very complex datasets

---

### 2. EfficientNetB0

Advantages:
- High accuracy
- Efficient architecture
- Better feature extraction

Disadvantages:
- Slightly slower than MobileNetV2
- Higher computational requirements

---

### 3. ResNet50

Advantages:
- Very high accuracy
- Robust feature extraction
- Widely used in research

Disadvantages:
- Large model size
- High memory usage
- Not ideal for mobile deployment

---

## Comparison

| Feature | MobileNetV2 | EfficientNetB0 | ResNet50 |
|----------|-------------|----------------|-----------|
| Accuracy | ⭐⭐⭐⭐☆ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Speed | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ | ⭐⭐⭐☆☆ |
| Model Size | Small | Medium | Large |
| Mobile Friendly | ✅ | ✅ | ❌ |
| Offline Support | Excellent | Good | Poor |

---

## Final Selection

**Selected Model:** MobileNetV2

### Why MobileNetV2?

We selected MobileNetV2 because it provides an excellent balance between accuracy, speed, and model size. It is designed for mobile and edge devices, making it ideal for future offline deployment in rural areas where internet connectivity is limited.

---

## Future Scope

- Fine-tune the model using Indian crop datasets.
- Convert the model to TensorFlow Lite for offline mobile prediction.
- Improve accuracy using transfer learning and field-collected images.