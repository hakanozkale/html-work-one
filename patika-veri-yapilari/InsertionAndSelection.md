# Proje 1

## Insertion Sort
[22,27,16,2,18,6] -> Insertion Sort

Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.
Big-O gösterimini yazınız.

Time Complexity: Dizi sıralandıktan sonra 18 sayısı aşağıdaki case'lerden hangisinin kapsamına girer? Yazınız

Average case: Aradığımız sayının ortada olması
Worst case: Aradığımız sayının sonda olması
Best case: Aradığımız sayının dizinin en başında olması.
---
## Çözüm
2. elemanı seçerek başlıyoruz ve seçtiğimiz 2. eleman key(anahtar) olmuş oluyor. Anahtar kendinden önceki tüm sayılarla, kendisini kıyaslar. Kendinden büyük olan her sayıyla yerleri değiştirir. Kendinden küçük sayıyla karşılaştığında yer değiştirme işlemi biter. Ardından dizinin son elemanına kadar anahtar sayı seçimi ve devamındaki tüm işlemler devam eder. 

| Aşama | Dizi | Seçilen Eleman | Karşılaştırma |
| :----: | :----: | :----: | :----: |
| 1 | [22, 27, 16, 2, 18, 6] | 27 | (22 < 27) |
| 2 | [22, 27, 16, 2, 18, 6] | 16 | (16 < 27) & (16 < 22) |
| 3 | [16, 22, 27, 2, 18, 6] | 2 | (2 < 27) & (2 < 22) & (2 < 16) |
| 4 | [2, 16, 22, 27, 18, 6] | 18 | (18 < 27) & (18 < 22) & (16 < 18) |
| 5 | [2, 16, 18, 22, 27, 6] | 6 | (6 < 27) & (6 < 22) & (6 < 18) & (6 < 16) & (2 < 6) |
| 6 | [2, 6, 16, 18, 22, 27] | - | - |
### Big-O gösterimi : 
```
N elemanlı bir diziyi sıralamak için:
= n+(n-1)+(n-2)...+1
= (n * (n+1)) / 2
= (n² + n) / 2
= O(n²)
```
### Time Complexity: Average case
Worst case: Aradığımız sayının dizinin en sonunda olması.
Average case: Aradığımız sayının dizinin ortasında olması.
Best case: Aradığımız sayının dizinin en başında olması.
---

## Selection Sort
[7,3,5,8,2,9,4,15,6] dizisinin Selection Sort'a göre ilk 4 adımını yazınız.

0-[7,3,5,8,2,9,4,15,6]
1-[2,3,5,8,7,9,4,15,6]
2-[2,3,4,8,7,9,5,15,6]
3-[2,3,4,5,7,9,8,15,6]
4-[2,3,4,5,6,9,8,15,7]
5-[2,3,4,5,6,7,8,15,9]
6-[2,3,4,5,6,7,8,9,15]
---
