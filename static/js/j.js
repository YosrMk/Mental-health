// JavaScript from the HTML file
const new_cookie_names = {
    ms_click_tracker: 'bh_mc_id',
};

function get_cookie(cookie_name) {
    let name = cookie_name + "=";
    let cookie_array = document.cookie.split(';');
    for (let i = 0; i < cookie_array.length; i++) {
        let c = cookie_array[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (new_cookie_names[cookie_name] && c.indexOf(new_cookie_names[cookie_name] + '=') === 0) {
            return c.substring(new_cookie_names[cookie_name].length + 1, c.length);
        } else if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

function set_cookie(cookie_name, cookie_value, expire_seconds, additional_param_info = '') {
    let d = new Date();
    d.setTime(d.getTime() + (expire_seconds * 1000));
    let expires = "";
    if (expire_seconds != false) {
        expires = "expires=" + d.toUTCString();
    }
    if (new_cookie_names[cookie_name]) {
        cookie_name = new_cookie_names[cookie_name];
    }
    if (additional_param_info.length && additional_param_info.charAt(0) !== ';') {
        additional_param_info = ';' + additional_param_info;
    }
    document.cookie = cookie_name + "=" + cookie_value + ";" + expires + ";path=/" + additional_param_info;
}

const page_info = {
    locale: "en-US",
    force_enable_language: false,
    localizejs_language: "en",
    geo_country: "sy",
    sites_fqdn: ["www.mytherapist.com", "www.teencounseling.com", "www.betterhelp.com", "www.betterhelporg.com", "www.regain.us"],
    redirect_sites_fqdn: ["www.betterhelp.com", "www.regain.us", "www.teencounseling.com"],
    show_cookie_banner: true,
    ms_cookie_consent_settings: { is_in_GB_EU: false, ms_cookie_consent_required: false },
    redesigned_home: "betterhelp_two",
    account_recovery: false,
    total_sessions: 422240501,
    total_therapists: 30187,
    total_members: 5468778,
    show_ukraine_support_modal: false,
    app_version: "b5cffb8dc3d16900b90",
    user_type: "logged_out_user",
    user_id: "d8327f95f49711a1edda30a67792406279121c50fcc3e4bf3ff887f0e3ec37db563ae376f8d462dba876ee66023d606d1370320d5d716d56071431cd537cf2cb",
    template: "main",
    is_mobile: false,
    is_app: false,
    is_ios_app: false,
    is_android_app: false,
    user_app_version: null,
    is_development_local: false,
    is_development_cloud: false,
    is_staging: false,
    is_non_production_cloud: false,
    is_qa_server: false,
    features: {
        specify_podcast: true,
        sunsetting: false,
        urgent_messages: true,
        couples: false,
        phone_calls: true,
        secret_assign_straights: true,
        livechat: true,
        about: true,
        counselor_application: true,
        counselor_application_lean: false,
        worksheets: true,
        smart_match_with_categories: true,
        groupinars: true,
        group_sessions: true,
        login_quotes: true,
        videosessions: true,
        app_supports_videosessions: true,
        cloud_chat: true,
        phq_followup: true,
        consent_agreement: true,
        gmail_quick_action: true,
        scheduling: true,
        support_link: true,
        has_paypal_always: false,
        no_trial: true,
        strike_through_cake: true,
        dollar_test_charge: true,
        groupon: true,
        mobgo: true,
        mental: true,
        funnel_smart_match: true,
        funnel_overview: true,
        offer_promo_codes: true,
        email_verification_always: true,
        reviews_page: true,
        jobs_page: true,
        security_logos_display: true,
        social_links_display: true,
        counselor_directory: true,
        language_is_matching_hard_filter: false,
        advice: true,
        presskit: true,
        press_page: true,
        text_notifications: true,
        goals: true,
        goals_mobile_main_menu: false,
        batch_creation: true,
        ask_language: true,
        parent_child_account: false,
        hardcoded_testimonials: false,
        friendly_funnel: true,
        referral_program: true,
        vouchers: true,
        betterhelp_branded: true,
        signup_captcha: true,
        signup_repeat_password: false,
        phone_on_mobile_signup: true,
        cookie_consent_required: true,
        journal: true,
        maintenance_plan: true,
        show_business_link: true,
        show_impressum: true,
        counselors_page: true
    },
    date_time_formats: {
        full: "F j, Y g:ia T",
        full_short_mo_no_tz: "M j, Y g:ia",
        date: "F j, Y",
        date_short_mo: "M j, Y",
        date_short_mo_int: "j M, Y",
        time: "g:ia",
        time_with_tz: "g:ia T",
        bh_date: "D, M j, Y \\a\\t g:ia T",
        bh_date_int: "D, j M, Y \\a\\t g:ia T",
        bh_date_full_day: "l, M j, Y \\a\\t g:ia T",
        bh_date_int_full_day: "l, j M, Y \\a\\t g:ia T",
        numeric_date_int: "d.m.Y"
    },
    subdomain: "www",
    environment_name: null,
    cdn_host_assets: "assets.betterhelp.com",
    cdn_host: "static.betterhelp.com",
    assets_app_version: "c5730fca9912",
    contrib_app_version: 28,
    env_image_tag: "20250314RC6626900b90",
    product_code_name: "betterhelp",
    product_name: "BetterHelp",
    unix_timestamp: 1742228068,
    track_userid: "",
    coralogix_api_url: "https://api.coralogix.us/api/v1/logs",
    coralogix_api_key: "cxtp_xLio15bMClZkt4QAxKEEOIKfFpDvku",
    use_sentry: 1,
    msfrontend_logger_ignore_regex_useragent: "Googlebot/2.1|RavenCrawler|Bytespider",
    msfrontend_logger_ignore_regex_eventmessage: "ResizeObserver loop|Failed to write image to cache|Non-Error exception captured|Non-Error promise rejection captured|OpenTok:|Extension context invalidated|telephone",
    default_language_id: 1,
    csrf_token: "3bb527c9deb17f067c25a91221cbac5f242634771cf6127bfd3b812260e9493cc533d56b064849f658abca221e1b4eb579d65cc383f46d23d9a8ac7d1186b443",
    presignup_experiments: {
        ULTRAHUMAN_RING_V2: "CONTROL",
        NEW_GET_STARTED_COPY_V1: "CONTROL",
        QUIZ_ABANDONMENT_MITIGATION_IN_GO_PAGE: "CONTROL",
        MATCHING_TIME_IN_QUIZ: "CONTROL",
        NEW_HOMEPAGE_VALUE_PROPS: "CONTROL"
    },
    counselor_presignup_experiments: [],
    eligible_for_iterable: false,
    is_eligible_for_analytics: false,
    showCancelMembership: false,
    base64_encode_entries: false,
    base64_encode_journals: false,
    base64_encode_notes: false
};

function remove_url_parameter(url, parameter) {
    var url_parts = url.split('?');
    if (url_parts.length >= 2) {
        var prefix = encodeURIComponent(parameter) + '=';
        var pars = url_parts[1].split(/[&;]/g);

        for (var i = pars.length; i-- > 0;) {
            if (pars[i].lastIndexOf(prefix, 0) !== -1) {
                pars.splice(i, 1);
            }
        }

        url = url_parts[0] + (pars.length > 0 ? '?' + pars.join('&') : "");
        return url;
    } else {
        return url;
    }
}

try {
    var clean_url = remove_url_parameter(window.location.href, 'email');
    clean_url = remove_url_parameter(clean_url, 'e');
    clean_url = remove_url_parameter(clean_url, 'pe');
    clean_url = remove_url_parameter(clean_url, 'pn');
    clean_url = remove_url_parameter(clean_url, 'organization_name');
    window.history.replaceState('', '', clean_url);
} catch (e) {}

const observer = lozad();
observer.observe();

$(document).ready(function () {
    let searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has('link_expired')) {
        $('#modal-link-expired').modal('show');
    }
    if (page_info.product_code_name === 'betterhelp') {
        var counseling_type = null;
        var question_name = 'What type of therapy are you looking for?';
        $('.home-illus-button-group a').click(function () {
            counseling_type = $(this).text().trim();
            if (counseling_type.toLowerCase().indexOf("individual") > -1 && typeof BhEvents !== undefined) {
                CounselingSelectedEvent("individual").send();
            }
        });
        $('div[id^=refer_to]').on('shown.bs.modal', function () {
            if (typeof snowplow !== "undefined") {
                snowplow("trackStructEvent", {
                    category: "onboarding_redirect_modal",
                    action: "shown",
                    context: [{
                        schema: "iglu:com.betterhelp/onboarding-redirect-modal/jsonschema/1-0-0",
                        data: {
                            triggering_question_name: question_name,
                            triggering_question_number: 0,
                            modal_passable: "yes",
                            proposed_domain: counseling_type
                        }
                    }]
                });
            }
        });
        $('.redirect-button').on('click', function () {
            var modal_response = $(this).text();
            if (typeof snowplow !== "undefined") {
                snowplow("trackStructEvent", {
                    category: "onboarding_redirect_modal",
                    action: "answered",
                    context: [{
                        schema: "iglu:com.betterhelp/onboarding-redirect-modal/jsonschema/1-0-0",
                        data: {
                            triggering_question_name: question_name,
                            triggering_question_number: 0,
                            modal_passable: 'yes',
                            proposed_domain: counseling_type,
                            modal_response: modal_response
                        }
                    }]
                });
                var counseling_type = '';
                if (modal_response.toLowerCase().indexOf("teen") > -1) {
                    counseling_type = "teen";
                } else if (modal_response.toLowerCase().indexOf("couple") > -1) {
                    counseling_type = "couples";
                }
                if (typeof BhEvents !== undefined) {
                    CounselingSelectedEvent(counseling_type).send();
                }
            }
        });
        $('button[id^="dont-redirect"]').on('click', function () {
            var modal_response = $(this).text();
            if (typeof snowplow !== "undefined") {
                snowplow("trackStructEvent", {
                    category: "onboarding_redirect_modal",
                    action: "answered",
                    context: [{
                        schema: "iglu:com.betterhelp/onboarding-redirect-modal/jsonschema/1-0-0",
                        data: {
                            triggering_question_name: question_name,
                            triggering_question_number: 0,
                            modal_passable: 'yes',
                            proposed_domain: counseling_type,
                            modal_response: modal_response
                        }
                    }]
                });
                if (typeof BhEvents !== undefined) {
                    CounselingSelectedEvent("individual").send();
                }
            }
        });
    }
});

function addFormNonces() {
    var forms = document.querySelectorAll('form');
    for (var i = 0; i < forms.length; i++) {
        addFormNonce(forms[i]);
    }
}

function addFormNonce(form) {
    var nonce = page_info.user_type + ":" + page_info.user_id + ":" + form.getAttribute('id') + ":" + Date.now(),
        nonce_el = form.querySelector('[name=nonce]');

    if (nonce_el) {
        nonce_el.value = nonce;
    } else {
        nonce_el = document.createElement('input');
        nonce_el.type = 'hidden';
        nonce_el.name = 'nonce';
        nonce_el.value = nonce;
        form.appendChild(nonce_el);
    }
}

addFormNonces();