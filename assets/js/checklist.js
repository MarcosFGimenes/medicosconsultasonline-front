const equipmentCatalog = [
  {
    id: 'gerador-emergencia',
    name: 'Gerador de emergência',
    description: 'Equipamento responsável por manter a energia em casos de queda de rede.',
    items: [
      {
        id: 'inspecao-visual',
        label: 'Inspeção visual de cabos e conexões',
        helper: 'Verifique sinais de aquecimento, oxidação ou folgas em bornes e cabos.'
      },
      {
        id: 'teste-partida',
        label: 'Teste de partida automática',
        helper: 'Simule queda de energia e confirme se o gerador entra em operação em até 15 segundos.'
      },
      {
        id: 'nivel-oleo',
        label: 'Nível de óleo e fluidos',
        helper: 'Observe a vareta de medição e a existência de vazamentos aparentes.'
      }
    ],
    history: [
      {
        date: '2024-06-14',
        responsible: 'Paulo Martins',
        notes: 'Solicitada visita da manutenção elétrica.',
        responses: {
          'inspecao-visual': {
            status: 'inconforme',
            notes: 'Cabos da fase B com sinais de oxidação e odor de queimado.'
          },
          'teste-partida': {
            status: 'conforme',
            notes: 'Entrada automática em 9 segundos.'
          },
          'nivel-oleo': {
            status: 'conforme',
            notes: 'Nível dentro do recomendado pelo fabricante.'
          }
        }
      },
      {
        date: '2024-05-20',
        responsible: 'Lívia Costa',
        notes: 'Sem intercorrências.',
        responses: {
          'inspecao-visual': {
            status: 'conforme',
            notes: 'Cabos limpos e sem aquecimento.'
          },
          'teste-partida': {
            status: 'conforme',
            notes: 'Entrada automática em 11 segundos.'
          },
          'nivel-oleo': {
            status: 'conforme',
            notes: 'Nível correto, sem vazamentos.'
          }
        }
      }
    ]
  },
  {
    id: 'compressor-ar',
    name: 'Compressor de ar principal',
    description: 'Responsável pela alimentação pneumática do centro cirúrgico.',
    items: [
      {
        id: 'pressao-saida',
        label: 'Pressão de saída',
        helper: 'Confirmar pressão entre 6,5 e 7 bar, observando vibrações atípicas.'
      },
      {
        id: 'dreno-automatico',
        label: 'Dreno automático',
        helper: 'Certifique-se de que o dreno está operando e sem obstruções.'
      },
      {
        id: 'filtro-linha',
        label: 'Filtro de linha',
        helper: 'Verificar estado do elemento filtrante e existência de umidade em excesso.'
      }
    ],
    history: [
      {
        date: '2024-06-11',
        responsible: 'Amanda Rocha',
        notes: 'Manter monitoramento diário do filtro até a troca agendada.',
        responses: {
          'pressao-saida': {
            status: 'conforme',
            notes: 'Pressão estabilizada em 6,7 bar.'
          },
          'dreno-automatico': {
            status: 'conforme',
            notes: 'Dreno abriu automaticamente após 30 minutos.'
          },
          'filtro-linha': {
            status: 'inconforme',
            notes: 'Filtro com saturação avançada e presença de óleo.'
          }
        }
      },
      {
        date: '2024-05-18',
        responsible: 'Amanda Rocha',
        notes: 'Troca preventiva do elemento filtrante agendada para junho.',
        responses: {
          'pressao-saida': {
            status: 'conforme',
            notes: 'Pressão dentro da faixa.'
          },
          'dreno-automatico': {
            status: 'conforme',
            notes: 'Sem acúmulo de condensado.'
          },
          'filtro-linha': {
            status: 'conforme',
            notes: 'Filtro limpo.'
          }
        }
      }
    ]
  },
  {
    id: 'esterilizador-vapor',
    name: 'Esterilizador a vapor',
    description: 'Utilizado para esterilização de materiais cirúrgicos sensíveis.',
    items: [
      {
        id: 'ciclo-vazio',
        label: 'Ciclo de pré-vácuo',
        helper: 'Analise o gráfico do ciclo e confirme ausência de alarmes.'
      },
      {
        id: 'vedacao-porta',
        label: 'Vedação da porta',
        helper: 'Observe se há fuga de vapor ou desgaste na borracha de vedação.'
      },
      {
        id: 'registro-rastreabilidade',
        label: 'Registro de rastreabilidade',
        helper: 'Confirme registro correto no sistema para cada ciclo executado.'
      }
    ],
    history: [
      {
        date: '2024-06-09',
        responsible: 'Renato Pires',
        notes: 'Acionado fornecedor para inspeção da vedação.',
        responses: {
          'ciclo-vazio': {
            status: 'conforme',
            notes: 'Gráfico dentro dos padrões.'
          },
          'vedacao-porta': {
            status: 'inconforme',
            notes: 'Vazamento leve percebido na lateral direita.'
          },
          'registro-rastreabilidade': {
            status: 'conforme',
            notes: 'Todos os ciclos registrados.'
          }
        }
      },
      {
        date: '2024-05-15',
        responsible: 'Renato Pires',
        notes: 'Sem inconsistências.',
        responses: {
          'ciclo-vazio': {
            status: 'conforme',
            notes: 'Pré-vácuo dentro da curva ideal.'
          },
          'vedacao-porta': {
            status: 'conforme',
            notes: 'Sem vazamentos.'
          },
          'registro-rastreabilidade': {
            status: 'conforme',
            notes: 'Registros atualizados no sistema.'
          }
        }
      }
    ]
  }
];

const formatDate = (dateString) => {
  const formatter = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
  return formatter.format(new Date(dateString));
};

const createIssueBadge = (text, tone = 'warning') => {
  const tones = {
    warning: 'bg-warning-100 text-warning-600 border-warning-500/40',
    success: 'bg-brand-100 text-brand-700 border-brand-500/40',
    neutral: 'bg-slate-100 text-slate-600 border-slate-200'
  };
  return `<span class="inline-flex items-center gap-2 rounded-full border ${tones[tone]} px-3 py-1 text-xs font-semibold">${text}</span>`;
};

document.addEventListener('DOMContentLoaded', () => {
  const equipmentSelect = document.querySelector('#equipmentSelect');
  const itemsContainer = document.querySelector('#checklistItems');
  const previousIssuesContainer = document.querySelector('#previousIssues');
  const lastChecklistMeta = document.querySelector('#lastChecklistMeta');
  const adminSummary = document.querySelector('#adminSummary');
  const summaryBadge = document.querySelector('#summaryBadge');
  const form = document.querySelector('#checklistForm');
  const feedbackBox = document.querySelector('#formFeedback');
  const checklistDateInput = document.querySelector('#checklistDate');

  if (checklistDateInput) {
    const today = new Date();
    checklistDateInput.value = today.toISOString().split('T')[0];
  }

  equipmentCatalog.forEach((equipment) => {
    const option = document.createElement('option');
    option.value = equipment.id;
    option.textContent = equipment.name;
    equipmentSelect.appendChild(option);
  });

  const renderEquipment = (equipmentId) => {
    const equipment = equipmentCatalog.find((item) => item.id === equipmentId);

    if (!equipment) {
      itemsContainer.innerHTML = '<p class="text-sm text-slate-500">Selecione um equipamento para começar.</p>';
      previousIssuesContainer.innerHTML = '';
      lastChecklistMeta.textContent = 'Selecione um equipamento para ver o histórico.';
      return;
    }

    const lastChecklist = equipment.history?.[0] ?? null;
    const previousNonConformities = new Map();

    if (lastChecklist) {
      lastChecklistMeta.innerHTML = `Checklist realizado em <strong>${formatDate(lastChecklist.date)}</strong> por <strong>${lastChecklist.responsible}</strong>.`;
      if (lastChecklist.notes) {
        lastChecklistMeta.innerHTML += `<br><span class="text-xs text-slate-500">Observações: ${lastChecklist.notes}</span>`;
      }

      Object.entries(lastChecklist.responses).forEach(([itemId, response]) => {
        if (response.status === 'inconforme') {
          previousNonConformities.set(itemId, response);
        }
      });
    } else {
      lastChecklistMeta.textContent = 'Ainda não existe checklist registrado para este equipamento.';
    }

    if (previousNonConformities.size > 0) {
      const issuesList = Array.from(previousNonConformities.entries())
        .map(([itemId, response]) => {
          const itemInfo = equipment.items.find((item) => item.id === itemId);
          return `
            <article class="rounded-2xl border border-warning-500/30 bg-warning-50/80 p-4 shadow-sm">
              <div class="flex items-start justify-between gap-3">
                <div>
                  <h3 class="text-sm font-semibold text-warning-600">${itemInfo?.label ?? 'Item não encontrado'}</h3>
                  <p class="mt-1 text-xs text-warning-600/80">Inconforme no último checklist.</p>
                </div>
                ${createIssueBadge('Atenção', 'warning')}
              </div>
              <p class="mt-3 text-sm text-warning-700">${response.notes || 'Sem observações registradas.'}</p>
            </article>
          `;
        })
        .join('');
      previousIssuesContainer.innerHTML = `
        <p class="text-sm text-slate-500">Itens que exigem atenção imediata:</p>
        <div class="mt-3 space-y-3">${issuesList}</div>
      `;
    } else {
      previousIssuesContainer.innerHTML = '<p class="text-sm text-slate-500">Nenhuma inconformidade registrada no último checklist.</p>';
    }

    itemsContainer.innerHTML = '';

    equipment.items.forEach((item) => {
      const wrapper = document.createElement('article');
      const hasPendingIssue = previousNonConformities.has(item.id);
      const previousData = lastChecklist?.responses?.[item.id];

      wrapper.className = `rounded-2xl border px-5 py-4 transition bg-white/90 ${
        hasPendingIssue ? 'border-warning-500/50 bg-warning-50 highlight-card' : 'border-slate-200'
      }`;

      wrapper.innerHTML = `
        <div class="flex items-start justify-between gap-4">
          <div>
            <h3 class="text-base font-semibold text-slate-900">${item.label}</h3>
            <p class="mt-1 text-sm text-slate-500">${item.helper}</p>
            ${hasPendingIssue ? `
              <div class="mt-3 rounded-xl border border-warning-500/30 bg-warning-100/70 px-4 py-3 text-sm text-warning-700">
                <p class="font-semibold">Inconformidade anterior:</p>
                <p class="mt-1">${previousData?.notes || 'Sem observações adicionais.'}</p>
                <p class="mt-2 text-xs text-warning-600/80">${formatDate(lastChecklist.date)} — ${lastChecklist.responsible}</p>
              </div>
            ` : ''}
          </div>
          ${hasPendingIssue ? createIssueBadge('Monitorar', 'warning') : ''}
        </div>
        <div class="mt-4 grid gap-3 sm:grid-cols-2">
          <label class="flex flex-col gap-2 text-sm font-medium text-slate-600">
            Situação atual
            <select name="status-${item.id}" class="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-inner focus:outline-none focus:ring-2 focus:ring-brand-500" required>
              <option value="conforme">Conforme</option>
              <option value="inconforme">Inconforme</option>
            </select>
          </label>
          <label class="flex flex-col gap-2 text-sm font-medium text-slate-600">
            Observações
            <textarea name="notes-${item.id}" rows="2" class="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-inner focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="Descreva detalhes relevantes"></textarea>
          </label>
        </div>
        ${hasPendingIssue ? `
          <fieldset class="mt-4 rounded-2xl border border-warning-500/30 bg-white/60 px-4 py-3">
            <legend class="px-2 text-xs font-semibold uppercase tracking-wide text-warning-600">Situação da inconformidade</legend>
            <p class="text-sm text-slate-600">O problema identificado anteriormente foi resolvido?</p>
            <div class="mt-3 flex flex-wrap gap-3 text-sm">
              <label class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2">
                <input type="radio" name="resolution-${item.id}" value="resolvido" class="h-4 w-4 text-brand-600 focus:ring-brand-500" required>
                <span>Sim, resolvido</span>
              </label>
              <label class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2">
                <input type="radio" name="resolution-${item.id}" value="continua" class="h-4 w-4 text-brand-600 focus:ring-brand-500" required>
                <span>Não, continua inconforme</span>
              </label>
            </div>
          </fieldset>
        ` : ''}
      `;

      itemsContainer.appendChild(wrapper);

      if (hasPendingIssue) {
        const resolutionInputs = wrapper.querySelectorAll(`input[name="resolution-${item.id}"]`);
        const statusSelect = wrapper.querySelector(`select[name="status-${item.id}"]`);
        resolutionInputs.forEach((input) => {
          input.addEventListener('change', () => {
            statusSelect.value = input.value === 'resolvido' ? 'conforme' : 'inconforme';
          });
        });
      }
    });
  };

  equipmentSelect.addEventListener('change', (event) => {
    renderEquipment(event.target.value);
    feedbackBox.classList.add('hidden');
    feedbackBox.textContent = '';
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const equipmentId = equipmentSelect.value;
    const equipment = equipmentCatalog.find((item) => item.id === equipmentId);
    if (!equipment) {
      feedbackBox.textContent = 'Selecione um equipamento antes de registrar o checklist.';
      feedbackBox.classList.remove('hidden');
      feedbackBox.classList.add('border-warning-200', 'bg-warning-50', 'text-warning-600');
      return;
    }

    const formData = new FormData(form);
    const responsible = formData.get('responsible');
    const checklistDate = formData.get('checklistDate');
    const generalNotes = formData.get('generalNotes');

    if (!responsible || !checklistDate) {
      feedbackBox.textContent = 'Informe o responsável e a data do checklist.';
      feedbackBox.classList.remove('hidden');
      feedbackBox.classList.add('border-warning-200', 'bg-warning-50', 'text-warning-600');
      return;
    }

    const lastChecklist = equipment.history?.[0] ?? null;
    const previousNonConformities = new Set();
    if (lastChecklist) {
      Object.entries(lastChecklist.responses).forEach(([itemId, response]) => {
        if (response.status === 'inconforme') {
          previousNonConformities.add(itemId);
        }
      });
    }

    const newEntry = {
      date: checklistDate,
      responsible,
      notes: generalNotes?.trim() || '',
      responses: {}
    };

    const recurrences = [];
    const resolvedIssues = [];
    const newNonConformities = [];

    equipment.items.forEach((item) => {
      const status = formData.get(`status-${item.id}`);
      const notes = formData.get(`notes-${item.id}`)?.trim() || '';
      const record = { status, notes };

      if (previousNonConformities.has(item.id)) {
        const resolution = formData.get(`resolution-${item.id}`);
        record.resolution = resolution;
        const stillInconform = resolution === 'continua' || status === 'inconforme';
        if (stillInconform) {
          recurrences.push({
            item: item.label,
            previous: lastChecklist.responses[item.id],
            currentNotes: notes
          });
        } else {
          resolvedIssues.push({
            item: item.label,
            previous: lastChecklist.responses[item.id],
            currentNotes: notes
          });
        }
      } else if (status === 'inconforme') {
        newNonConformities.push({
          item: item.label,
          notes
        });
      }

      newEntry.responses[item.id] = record;
    });

    equipment.history.unshift(newEntry);

    feedbackBox.textContent = 'Checklist registrado com sucesso e painel administrativo atualizado!';
    feedbackBox.classList.remove('hidden', 'border-warning-200', 'bg-warning-50', 'text-warning-600');
    feedbackBox.classList.add('border-brand-200', 'bg-brand-50', 'text-brand-700');

    const summarySections = [];

    if (recurrences.length > 0) {
      summarySections.push(`
        <section class="rounded-2xl border border-warning-500/30 bg-warning-50/80 p-4">
          <h3 class="text-sm font-semibold text-warning-700">Reincidências detectadas (${recurrences.length})</h3>
          <ul class="mt-2 space-y-2 text-sm text-warning-700">
            ${recurrences
              .map((item) => `
                <li>
                  <strong>${item.item}</strong>: permanece inconforme. Observação atual: ${item.currentNotes || 'sem observações adicionais.'}
                </li>
              `)
              .join('')}
          </ul>
        </section>
      `);
      summaryBadge.textContent = 'Reincidências em análise';
      summaryBadge.className = 'inline-flex items-center gap-2 rounded-full bg-warning-100 px-3 py-1 text-xs font-semibold text-warning-600';
    } else {
      summaryBadge.textContent = 'Sem reincidências';
      summaryBadge.className = 'inline-flex items-center gap-2 rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700';
    }

    if (resolvedIssues.length > 0) {
      summarySections.push(`
        <section class="rounded-2xl border border-brand-500/30 bg-brand-50/80 p-4">
          <h3 class="text-sm font-semibold text-brand-700">Problemas resolvidos (${resolvedIssues.length})</h3>
          <ul class="mt-2 space-y-2 text-sm text-brand-700">
            ${resolvedIssues
              .map((item) => `
                <li><strong>${item.item}</strong>: inconformidade sanada. ${item.currentNotes ? `Observação: ${item.currentNotes}` : ''}</li>
              `)
              .join('')}
          </ul>
        </section>
      `);
    }

    if (newNonConformities.length > 0) {
      summarySections.push(`
        <section class="rounded-2xl border border-slate-200 bg-white/70 p-4">
          <h3 class="text-sm font-semibold text-slate-700">Novas inconformidades (${newNonConformities.length})</h3>
          <ul class="mt-2 space-y-2 text-sm text-slate-600">
            ${newNonConformities
              .map((item) => `
                <li><strong>${item.item}</strong>: ${item.notes || 'sem observações adicionais.'}</li>
              `)
              .join('')}
          </ul>
        </section>
      `);
    }

    if (summarySections.length === 0) {
      summarySections.push(`
        <section class="rounded-2xl border border-brand-200 bg-brand-50/70 p-4 text-sm text-brand-700">
          Todos os itens foram marcados como conformes. Nenhuma ação corretiva pendente.
        </section>
      `);
    }

    adminSummary.innerHTML = `
      <div class="space-y-4">
        <div class="rounded-2xl border border-slate-200 bg-white/60 p-4 text-sm text-slate-600">
          <p><strong>Equipamento:</strong> ${equipment.name}</p>
          <p><strong>Data:</strong> ${formatDate(checklistDate)}</p>
          <p><strong>Responsável:</strong> ${responsible}</p>
          ${newEntry.notes ? `<p class="mt-2"><strong>Observações gerais:</strong> ${newEntry.notes}</p>` : ''}
        </div>
        ${summarySections.join('')}
      </div>
    `;

    form.reset();
    const today = new Date();
    checklistDateInput.value = today.toISOString().split('T')[0];
    renderEquipment(equipmentId);
  });
});
