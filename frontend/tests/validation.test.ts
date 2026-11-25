import { describe, expect, it } from 'vitest';
import { authError, validateCredentials } from '../src/validation';

describe('Preverjanje podatkov za prijavo in registracijo', () => {
  it.each(['stranka', 'trener'])('sprejme registracijo za vlogo %s', (role) => {
    expect(validateCredentials(' a@example.com ', '12345678', role)).toBeNull();
  });

  it('sprejme prijavo brez izbire vloge', () => {
    expect(validateCredentials('a@example.com', '12345678')).toBeNull();
  });

  it.each(['a.example.com', 'a@', 'a b@example.com'])('zavrne naslov %s', (email) => {
    expect(validateCredentials(email, '12345678')).toBe('Vnesite veljaven e-naslov.');
  });

  it('zavrne sedemmestno geslo', () => {
    expect(validateCredentials('a@example.com', '1234567')).toContain('najmanj 8 znakov');
  });

  it('zavrne registracijo skrbnika', () => {
    expect(validateCredentials('a@example.com', '12345678', 'administrator')).toContain('vlogo');
  });

  it('pri nepotrjeni prijavi uporabnika usmeri k potrditvenemu sporočilu', () => {
    expect(authError('email_not_confirmed')).toContain('potrdite e-naslov');
  });

  it('pri napačnih podatkih prikaže skupno obvestilo za e-naslov in geslo', () => {
    const message = authError('invalid_credentials');
    expect(message).toBe('Napačen e-naslov ali geslo.');
  });
});
