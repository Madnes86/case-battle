import { test, expect } from '@playwright/test';
test.describe('Header', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('View logo & SLOGAN', async ({ page }) => {
		await expect(page.locator('header')).toBeVisible();
		const logo = page.getByTestId('logo');
		await expect(logo).toBeVisible();
		const SLOGAN = page.locator('header a p');
		await expect(SLOGAN).toBeVisible();
	});
	test('View online & number', async ({ page }) => {
		const online = page.locator('header img[alt="Пользователей онлайн"]');
		await expect(online).toBeVisible();
		const number = page.locator('text=/\\d{3,5}/');
		await expect(number).toBeVisible();
	});
	test('View button menu on mobile', async ({ page }) => {
		await page.setViewportSize({ width: 600, height: 800 });
		const toggleMenu = page.locator('button', { hasText: 'menu' });
		await expect(toggleMenu).toBeVisible();
		await toggleMenu.click();
		const menu = page.locator('#menu');
		await expect(menu).toBeVisible();
	});
	test('Close menu if windowWidth > 800px', async ({ page }) => {
		await page.setViewportSize({ width: 600, height: 800 });
		const toggleMenu = page.locator('button', { hasText: 'menu' });
		await expect(toggleMenu).toBeVisible();
		await toggleMenu.click();
		const menu = page.locator('#menu');
		await expect(menu).toBeVisible();
		await page.setViewportSize({ width: 1200, height: 800 });
		await expect(menu).toBeVisible();
	});
	test('View select & auth', async ({ page }) => {
		const selects = page.locator('select');
		await expect(selects).toHaveCount(2);
		const auth = page.getByTestId('auth');
		await expect(auth).toBeVisible();
	});
});
