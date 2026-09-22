import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { BtnSimple, FormInputSimple } from 'getbasecore/Atoms';
import { Form } from 'getbasecore/Molecules';

const OPS = {
  title: ['contains', 'notContains', 'startsWith', 'endsWith'],
  platform: ['is', 'isNot'],
  extension: ['is', 'isNot'],
};
const newRule = () => ({ field: 'title', op: 'contains', value: '' });

// iTunes-like editor for a manual or smart (rule based) collection
function RomCollectionForm({ initial, systems, onSave, onCancel }) {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: '',
    type: 'manual',
    matchAll: true,
    limit: 0,
    rules: [newRule()],
    ...(initial || {}),
    ...(initial && initial.rules && initial.rules.length
      ? {}
      : { rules: [newRule()] }),
  });
  const update = (patch) => setForm((prev) => ({ ...prev, ...patch }));

  const updateRule = (index, patch) => {
    const rules = form.rules.map((rule, i) => {
      if (i !== index) return rule;
      const next = { ...rule, ...patch };
      if (patch.field && !OPS[patch.field].includes(next.op)) {
        [next.op] = OPS[patch.field];
        next.value =
          patch.field === 'platform' ? (systems[0] || {}).id || '' : '';
      }
      return next;
    });
    update({ rules });
  };

  const removeRule = (index) =>
    update({ rules: form.rules.filter((_, i) => i !== index) });

  const submit = (event) => {
    if (event) event.preventDefault();
    if (!form.name.trim()) return;
    onSave({
      name: form.name.trim(),
      type: form.type,
      matchAll: form.matchAll,
      limit: Number(form.limit) || 0,
      rules: form.type === 'smart' ? form.rules : [],
    });
  };

  return (
    <Form css="rom-collection-form" onSubmit={submit}>
      <FormInputSimple
        label={t('RomLibrary.collection.name')}
        type="text"
        name="collection-name"
        placeholder={t('RomLibrary.collection.namePlaceholder')}
        value={form.name}
        onChange={(e) => update({ name: e.target.value })}
      />

      {!initial && (
        <div className="rom-collection-form__types">
          {['manual', 'smart'].map((type) => (
            <button
              key={type}
              type="button"
              className={form.type === type ? 'is-active' : ''}
              onClick={() => update({ type })}
            >
              <strong>{t(`RomLibrary.collection.${type}`)}</strong>
              <small>{t(`RomLibrary.collection.${type}Hint`)}</small>
            </button>
          ))}
        </div>
      )}

      {form.type === 'smart' && (
        <div className="rom-collection-form__rules">
          <label className="rom-collection-form__field">
            <span>{t('RomLibrary.collection.match')}</span>
            <select
              value={form.matchAll ? 'all' : 'any'}
              onChange={(e) => update({ matchAll: e.target.value === 'all' })}
            >
              <option value="all">{t('RomLibrary.collection.matchAll')}</option>
              <option value="any">{t('RomLibrary.collection.matchAny')}</option>
            </select>
          </label>

          {form.rules.map((rule, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div className="rom-collection-form__rule" key={index}>
              <select
                value={rule.field}
                onChange={(e) => updateRule(index, { field: e.target.value })}
              >
                {Object.keys(OPS).map((field) => (
                  <option key={field} value={field}>
                    {t(`RomLibrary.collection.fields.${field}`)}
                  </option>
                ))}
              </select>
              <select
                value={rule.op}
                onChange={(e) => updateRule(index, { op: e.target.value })}
              >
                {OPS[rule.field].map((op) => (
                  <option key={op} value={op}>
                    {t(`RomLibrary.collection.ops.${op}`)}
                  </option>
                ))}
              </select>
              {rule.field === 'platform' ? (
                <select
                  value={rule.value}
                  onChange={(e) => updateRule(index, { value: e.target.value })}
                >
                  {systems.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
              ) : (
                <FormInputSimple
                  key={`${index}-${rule.field}`}
                  label=""
                  type="text"
                  name={`rule-value-${index}`}
                  value={rule.value}
                  onChange={(e) => updateRule(index, { value: e.target.value })}
                />
              )}
              <button
                type="button"
                className="rom-collection-form__remove"
                onClick={() => removeRule(index)}
                disabled={form.rules.length === 1}
                aria-label={t('RomLibrary.collection.removeRule')}
              >
                −
              </button>
            </div>
          ))}

          <div className="rom-collection-form__add">
            <BtnSimple
              css="btn-simple--2 btn-simple--xs"
              type="button"
              aria={t('RomLibrary.collection.addRule')}
              style={{ marginBottom: 0 }}
              onClick={() => update({ rules: [...form.rules, newRule()] })}
            >
              + {t('RomLibrary.collection.addRule')}
            </BtnSimple>
          </div>

          <div className="rom-collection-form__limit">
            <FormInputSimple
              label={t('RomLibrary.collection.limit')}
              type="number"
              name="collection-limit"
              min={0}
              value={form.limit}
              onChange={(e) => update({ limit: e.target.value })}
            />
            <small>{t('RomLibrary.collection.limitHint')}</small>
          </div>
        </div>
      )}

      <div className="rom-collection-form__actions">
        <BtnSimple
          css="btn-simple--1"
          type="button"
          aria={t('general.save')}
          disabled={!form.name.trim()}
          style={{ marginBottom: 0 }}
          onClick={() => submit()}
        >
          {t('general.save')}
        </BtnSimple>
        <BtnSimple
          css="btn-simple--2"
          type="button"
          aria={t('general.cancel')}
          style={{ marginBottom: 0 }}
          onClick={onCancel}
        >
          {t('general.cancel')}
        </BtnSimple>
      </div>
    </Form>
  );
}

RomCollectionForm.propTypes = {
  initial: PropTypes.object,
  systems: PropTypes.array,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
};

RomCollectionForm.defaultProps = {
  initial: null,
  systems: [],
  onSave: () => {},
  onCancel: () => {},
};

export default RomCollectionForm;
