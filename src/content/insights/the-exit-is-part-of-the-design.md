---
title: "The Exit Is Part of the Design"
category: "industry-trends"
industry: "cities"
author: "Quatro Team"
publishDate: 2026-10-05
featured: true
tags: ["public-sector", "open-standards", "procurement", "governed-autonomous-action", "operational-intelligence"]
readingTime: "5 min read"
excerpt: "Public institutions are asked to commit to intelligence systems for years while the models underneath them change every few months. When the rules, the data, and the reasoning live in a form only the vendor can read, the institution owns the outcomes but not the means. The contracts that hold up best describe the exit on the first day."
heroImage: "/images/insight-the-exit-is-part-of-the-design.png"
---

## A long commitment on a short-lived foundation

A public institution that adopts an intelligence system is making two promises at once. It is promising its citizens, its regulators, and its own staff that this system will be trustworthy for the life of the program. And it is promising to run the system for years, often across several administrations.

The technology underneath keeps a different clock. Language and vision models are replaced on a cycle measured in months. The best option at signature is often not the best option at renewal, and may not exist by then. Pricing, licensing terms, and hosting arrangements move on the same clock.

When a long institutional commitment rests on a short-lived technical foundation, and the two do not share a model of change, the institution inherits a quiet risk. It owns the outcomes. It may not own the means by which those outcomes are produced.

## What the institution actually needs to keep

It helps to be specific about what "the means" are, because they are more than the data.

The data is the obvious asset: registries, licenses, patrol records, case files. Institutions usually negotiate ownership of it, and rightly.

The second asset is what was built from the data. Every alert, map, report, and evidence package the system produces is a derived product, and in many institutions these become the working record of public decisions.

The third asset is the one that tends to be overlooked: the knowledge the institution put into the system. The regulatory rules its own analysts wrote. The vocabularies and ontologies configured for its domain. The thresholds, the zones, the workflows. Any adjustments made to a model using the institution's own ground-truth campaigns. This is the institution's expertise, expressed in a form the system can use. If it can only be read by the system that holds it, then leaving that system means starting the expertise over.

An institution that keeps all three can change vendors, change models, or bring the work in-house without losing its footing. An institution that keeps only the first has retained a pile of records and given away the working knowledge that made them useful.

## Substitutability is a design property

The practical test is whether any single component can be replaced without disturbing the rest. For the reasoning layer, that means the language and vision models can be swapped for equivalent ones, including open-weight models that run on infrastructure the institution controls, with no loss of rules, data, or configuration. No critical function should depend on a model that can only be reached as a service from somewhere else.

For the knowledge layer, it means rules and ontologies are held in documented, open formats that any competent team can read. Geospatial data in standard geospatial formats, tabular data in common tabular formats, rules in published standards for expressing them. These are unglamorous choices. They are also what separates an institution that can leave from one that has merely been told it can.

For the record layer, it means the audit chain travels with the data. A case that was built last year should still show who decided what, on which evidence, under which rule, even after the system that produced it has been retired.

## Why exit planning protects the work while it is running

It can seem odd to describe the end of a contract at the beginning of one. In practice the conversation improves the relationship, for a simple reason: it forces both sides to say what the institution is actually buying.

If the answer is a body of rules, a trusted record, and an operating capability, then the contract should describe how each of those is delivered, in what format, and on what timeline, if the arrangement ever ends. A thirty-day export in open formats and a ninety-day transition window, with certified deletion once the institution has confirmed it received everything, turn a vague assurance into something that can be tested before go-live. An export rehearsal during acceptance is more persuasive than any statement of intent.

There is also a governance benefit that has little to do with leaving. A model registry that lists every component in production, where it runs, what it is permitted to see, and how it has been evaluated gives the institution a way to oversee changes as they happen. When a model is replaced, the registry records it, and the institution hears about it before production does. The same register supports the principle that a person decides and signs. Governed autonomous action works when the institution can see which component acted, under which rule, and who authorized it. The ability to switch any component off, by function or by domain, without losing the case log, is what keeps that oversight practical.

## The cost of discovering this late

Institutions rarely run into this problem at the start. They meet it in year three, when a license is repriced, a model is retired, a leadership change brings a different preference, or a new regulation changes where data may be processed. At that point the institution learns what it can and cannot take with it, and learns it under time pressure.

The structural fix costs less at the beginning than at any later stage. It asks for formats chosen with reuse in mind, a registry kept current from the first deployment, and an exit that has been rehearsed once while everyone is still on good terms.

## A question for the first meeting

For any institution evaluating an intelligence system, a single question tends to surface the answer: if we decided in three years to run this ourselves, or with someone else, what would we walk away with, in what format, and how soon?

A clear answer is a sign that the system was built to serve the institution's mandate rather than to hold it in place. An operational intelligence utility earns its place by being useful every day, and by leaving the institution better equipped on the day it is no longer needed. The rules, the records, and the judgment belong to the people accountable for them, and the design should say so in writing.
