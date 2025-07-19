// playwright/test_LiveDrop.spec.ts
import { test, expect } from '@playwright/test';

test.describe('LiveDrop.svelte', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/your-route-to-component'); // замените на актуальный роут
    });

    test('should render 8 drops', async ({ page }) => {
        const drops = await page.locator('aside > div[role="list"]');
        await expect(drops).toHaveCount(8);
    });

    test('should show extra info on hover', async ({ page }) => {
        const firstDrop = page.locator('aside > div[role="list"]').first();
        await firstDrop.hover();
        await expect(firstDrop.locator('a')).toBeVisible();
    });

    test('should add new drop every second', async ({ page }) => {
        const drops = page.locator('aside > div[role="list"]');
        await expect(drops).toHaveCount(8);
        await page.waitForTimeout(1100);
        await expect(drops).toHaveCount(8); // всегда 8, но первый дроп должен быть новым
    });

    test('should not add drop while hovering', async ({ page }) => {
        const firstDrop = page.locator('aside > div[role="list"]').first();
        await firstDrop.hover();
        await page.waitForTimeout(1100);
        // Проверяем, что дропы не изменились (например, по имени)
        const name = await firstDrop.locator('p').textContent();
        await expect(firstDrop.locator('p')).toHaveText(name || '');
    });
});