import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('link', { name: 'To-Do' }).click();
  await page.getByRole('button', { name: 'Create Task' }).click();
  await page.getByRole('textbox', { name: 'Title' }).click();
  await page.getByRole('textbox', { name: 'Title' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Title' }).fill('Auto test');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Description' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Description' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Description' }).fill('This is an automated test');
  await page.locator('#Deadline').fill('2025-11-30');
  await page.getByRole('button', { name: 'Create', exact: true }).click();
});